import { useMemo } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import {
  Overlay,
  ModalBox,
  CloseButton,
  ModalHeader,
  ChatContainer,
} from "./styles";

type HelpModalProps = {
  open: boolean;
  onClose: () => void;
};

function getOrCreateDeviceId() {
  const storageKey = "seedbank_device_id";
  const existing = localStorage.getItem(storageKey);

  if (existing) return existing;

  const newId = crypto.randomUUID();
  localStorage.setItem(storageKey, newId);
  return newId;
}

export function HelpModal({ open, onClose }: HelpModalProps) {
  const deviceId = useMemo(() => getOrCreateDeviceId(), []);

  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        if (existing) {
          return existing;
        }

        const API_URL = import.meta.env.VITE_API_URL;

        const response = await fetch(`${API_URL}/api/chatkit/session`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            deviceId,
          }),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data?.error || "Não foi possível criar a sessão do chat.");
        }

        return data.client_secret;
      },
    },
  });

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>
            <h2>Ajuda</h2>
            <p>Tire dúvidas sobre o SeedBank.</p>
          </div>
          <CloseButton onClick={onClose} aria-label="Fechar">
            ×
          </CloseButton>
        </ModalHeader>

        <ChatContainer>
          <ChatKit control={control} />
        </ChatContainer>
      </ModalBox>
    </Overlay>
  );
}