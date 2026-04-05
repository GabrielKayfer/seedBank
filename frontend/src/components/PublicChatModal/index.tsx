import { useState } from "react";
import type { FormEvent } from "react";
import { ChatExperience, type ChatMessage } from "../ChatExperience";
import { CloseButton, ModalBox, ModalHeader, Overlay } from "./styles";
import { chatApi } from "../../services/chatApi";
import fechar from "../../assets/fechar.png";

type PublicChatModalProps = {
  open: boolean;
  onClose: () => void;
};

export function PublicChatModal({ open, onClose }: PublicChatModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedMessage = input.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    setMessages((current) => [...current, { role: "user", text: trimmedMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const data = await chatApi.sendPublicMessage(trimmedMessage);
      setMessages((current) => [...current, { role: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "bot",
          text: error instanceof Error ? error.message : "Nao foi possivel responder agora.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  if (!open) {
    return null;
  }

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <div>
            <h2>Ajuda SeedBank</h2>
            <p>Tire duvidas gerais sobre produtos, conta digital e como comecar com o SeedBank.</p>
          </div>
          <CloseButton onClick={onClose} aria-label="Fechar" type="button">
            <img src={fechar} alt="" />
          </CloseButton>
        </ModalHeader>

        <ChatExperience
          emptyState="Pergunte sobre o SeedBank, produtos, conta digital ou como abrir sua conta."
          input={input}
          inputPlaceholder="Pergunte algo sobre o SeedBank"
          isLoading={isLoading}
          loadingButtonLabel="Enviando..."
          loadingLabel="Pensando..."
          messages={messages}
          onInputChange={setInput}
          onSubmit={sendMessage}
          submitLabel="Enviar"
        />
      </ModalBox>
    </Overlay>
  );
}
