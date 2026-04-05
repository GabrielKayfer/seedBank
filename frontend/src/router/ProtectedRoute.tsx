import { useEffect, type ReactNode } from "react";
import AuthLoadingScreen from "../components/AuthLoadingScreen";
import { useAuth } from "../context/AuthContext";
import { navigateTo } from "./navigation";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token, isAuthenticated, isLoadingAuth } = useAuth();

  useEffect(() => {
    if (!isLoadingAuth && (!token || !isAuthenticated)) {
      navigateTo("/login");
    }
  }, [isAuthenticated, isLoadingAuth, token]);

  if (isLoadingAuth) {
    return (
      <AuthLoadingScreen
        title="Loading your account"
        description="We are confirming your session and preparing your customer area."
      />
    );
  }

  if (!token || !isAuthenticated) {
    return (
      <AuthLoadingScreen
        compact
        title="Redirecting to login"
        description="Your session is unavailable, so we are taking you back to sign in."
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
