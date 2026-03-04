import { useEffect, useRef, useState } from "react";
import {
  Overlay,
  ModalBox,
  CloseButton,
  ModalHeader,
  Messages,
  MessageBubble,
  Composer,
  Input,
  SendButton,
} from "./styles";

type HelpModalProps = {
  open: boolean;
  onClose: () => void;
};

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function HelpModal({ open, onClose }: HelpModalProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Oi! Como posso ajudar?" },
  ]);
  const [loading, setLoading] = useState(false);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!open) return null;


  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "assistant", content: "Digitando..." }]);
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-app-token": "vemhan-hidse0-zyDwap",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json().catch(() => ({}));;

      setMessages((prev) => prev.slice(0, -1));

      if (!response.ok) {
      const msg =
        response.status === 429
          ? "Limite de uso atingido. Tente novamente em alguns minutos."
          : response.status === 401
          ? "Não autorizado. Verifique a configuração do token."
          : data?.details
          ? `Erro: ${data.details}`
          : "Não consegui responder agora. Tente novamente.";

      setMessages((prev) => [...prev, { role: "assistant", content: msg }]);
      return;
    }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "(sem resposta)" },
      ]);
    } catch {
      setMessages((prev) => prev.slice(0, -1));
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Falha de conexão com o servidor. Verifique se ele está rodando." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

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

        <Messages>
          {messages.map((m, idx) => (
            <MessageBubble key={idx} $role={m.role}>
              {m.content}
            </MessageBubble>
          ))}
          <div ref={endRef} />
        </Messages>

        <Composer>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem..."
          />
          <SendButton onClick={handleSend} disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </SendButton>
        </Composer>
      </ModalBox>
    </Overlay>
  );
}