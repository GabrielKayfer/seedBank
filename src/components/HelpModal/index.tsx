import { useMemo } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import {
  ChatContainer,
  CloseButton,
  ModalBox,
  ModalHeader,
  Overlay,
} from "./styles";

import fechar from "../../assets/fechar.png"

type HelpModalProps = {
  open: boolean;
  onClose: () => void;
};

function getSessionEndpoint() {
  const configuredApiUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/$/, "");

  return configuredApiUrl
    ? `${configuredApiUrl}/api/v1/chatkit/sessions`
    : "/api/v1/chatkit/sessions";
}

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

        const response = await fetch(getSessionEndpoint(), {
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
          throw new Error(data?.error || "Nao foi possivel criar a sessao do chat.");
        }

        return data.client_secret;
      },
    },
  });

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <div>
            <h2>Ajuda</h2>
            <p>Tire duvidas sobre o SeedBank ou peca ajuda para abrir sua conta.</p>
          </div>
          <CloseButton onClick={onClose} aria-label="Fechar" type="button">
            <img src={fechar} alt="" />
          </CloseButton>
        </ModalHeader>

        <ChatContainer>
          <ChatKit control={control} />
        </ChatContainer>
      </ModalBox>
    </Overlay>
  );
}
