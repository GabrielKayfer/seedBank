import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { navigateTo } from "../router/navigation";
import { ApiClientError } from "../services/apiClient";
import { authApi, type AuthUser, type LoginPayload, type ProfileResponse } from "../services/authApi";
import { getStoredAuthToken, persistAuthToken } from "../services/authToken";

type AuthContextValue = {
  token: string | null;
  user: AuthUser | null;
  profile: ProfileResponse | null;
  isAuthenticated: boolean;
  isLoadingAuth: boolean;
  authError: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
  clearAuthError: () => void;
  refreshSession: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const clearSession = () => {
    setToken(null);
    setUser(null);
    setProfile(null);
    persistAuthToken(null);
  };

  const hydrateProfile = async (nextToken: string, fallbackUser?: AuthUser | null) => {
    const nextProfile = await authApi.me(nextToken);
    setProfile(nextProfile);
    setUser(
      fallbackUser ?? {
        id: nextProfile.id,
        fullName: nextProfile.fullName,
        email: nextProfile.email,
      },
    );
    setToken(nextToken);
    persistAuthToken(nextToken);
  };

  const handleAuthFailure = (error: unknown) => {
    if (error instanceof ApiClientError && error.status === 401) {
      clearSession();
      return;
    }

    clearSession();
    setAuthError(error instanceof Error ? error.message : "Nao foi possivel validar sua sessao.");
  };

  const refreshSession = async () => {
    const currentToken = getStoredAuthToken();

    if (!currentToken) {
      clearSession();
      setIsLoadingAuth(false);
      return;
    }

    setIsLoadingAuth(true);
    setAuthError(null);

    try {
      await hydrateProfile(currentToken, user);
    } catch (error) {
      handleAuthFailure(error);
    } finally {
      setIsLoadingAuth(false);
    }
  };

  useEffect(() => {
    void refreshSession();
  }, []);

  const login = async (payload: LoginPayload) => {
    setIsLoadingAuth(true);
    setAuthError(null);

    try {
      const session = await authApi.login(payload);
      setToken(session.token);
      setUser(session.user);
      persistAuthToken(session.token);
      await hydrateProfile(session.token, session.user);
      navigateTo("/app");
    } catch (error) {
      clearSession();
      setAuthError(error instanceof Error ? error.message : "Nao foi possivel entrar.");
      throw error;
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const logout = async () => {
    const currentToken = token ?? getStoredAuthToken();

    try {
      if (currentToken) {
        await authApi.logout(currentToken);
      }
    } catch {
      // The backend logout is contractual; local cleanup must still happen.
    } finally {
      clearSession();
      setAuthError(null);
      setIsLoadingAuth(false);
      navigateTo("/login");
    }
  };

  const value: AuthContextValue = {
    token,
    user,
    profile,
    isAuthenticated: Boolean(token && profile),
    isLoadingAuth,
    authError,
    login,
    logout,
    clearAuthError: () => setAuthError(null),
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider.");
  }

  return context;
}
