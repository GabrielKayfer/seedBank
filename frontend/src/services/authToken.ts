const PRIMARY_AUTH_TOKEN_STORAGE_KEY = "token";
const LEGACY_AUTH_TOKEN_STORAGE_KEY = "seedbank_auth_token";

export function persistAuthToken(token: string | null) {
  if (!token) {
    localStorage.removeItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY);
    localStorage.removeItem(LEGACY_AUTH_TOKEN_STORAGE_KEY);
    return;
  }

  localStorage.setItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY, token);
  localStorage.setItem(LEGACY_AUTH_TOKEN_STORAGE_KEY, token);
}

export function getStoredAuthToken() {
  return localStorage.getItem(PRIMARY_AUTH_TOKEN_STORAGE_KEY) ?? localStorage.getItem(LEGACY_AUTH_TOKEN_STORAGE_KEY);
}
