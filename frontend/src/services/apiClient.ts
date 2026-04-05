export class ApiClientError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
  }
}

type ApiError = {
  error?: string;
};

const DEFAULT_API_BASE_URL = "http://localhost:8080/api/v1";

function getApiBaseUrl() {
  const configuredApiUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/$/, "");

  if (!configuredApiUrl) {
    return DEFAULT_API_BASE_URL;
  }

  return configuredApiUrl.endsWith("/api/v1") ? configuredApiUrl : `${configuredApiUrl}/api/v1`;
}

export const API_BASE_URL = getApiBaseUrl();

export async function request<T>(path: string, init?: RequestInit, token?: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.headers ?? {}),
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = (data as ApiError | null)?.error || "Request failed.";
    throw new ApiClientError(message, response.status);
  }

  return data as T;
}
