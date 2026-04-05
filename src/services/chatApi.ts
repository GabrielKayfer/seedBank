import { request } from "./apiClient";

type ChatResponse = {
  reply: string;
};

export const chatApi = {
  sendPublicMessage(message: string) {
    return request<ChatResponse>("/public/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });
  },

  sendPrivateMessage(message: string, token: string) {
    return request<ChatResponse>(
      "/private/chat",
      {
        method: "POST",
        body: JSON.stringify({ message }),
      },
      token,
    );
  },
};
