import { request } from "./apiClient";

export type LoginPayload = {
  login?: string;
  email?: string;
  password: string;
};

export type AuthUser = {
  id: string;
  fullName: string;
  email: string;
};

export type LoginResponse = {
  token: string;
  user: AuthUser;
};

export type Transaction = {
  id: string;
  label: string;
  amount: number;
  date: string;
};

export type ProfileResponse = {
  id: string;
  fullName: string;
  email: string;
  accountType: string;
  availableBalance: number;
  currency: string;
  cardStatus: string;
  goalName: string;
  goalProgress: number;
  recentTransactions: Transaction[];
};

export const authApi = {
  login(payload: LoginPayload) {
    return request<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  me(token: string) {
    return request<ProfileResponse>("/auth/me", { method: "GET" }, token);
  },

  logout(token: string) {
    return request<{ message: string }>("/auth/logout", { method: "POST" }, token);
  },
};
