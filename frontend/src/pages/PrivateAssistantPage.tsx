import { useState } from "react";
import type { FormEvent } from "react";
import styled from "styled-components";
import { Button } from "../components/Button/intex";
import { ChatExperience, type ChatMessage } from "../components/ChatExperience";
import { useAuth } from "../context/AuthContext";
import { navigateTo } from "../router/navigation";
import { chatApi } from "../services/chatApi";

const PageShell = styled.div`
  display: grid;
  gap: 24px;
`;

const HeaderCard = styled.section`
  display: grid;
  gap: 18px;
  padding: 28px;
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.white};
  background:
    radial-gradient(circle at top left, rgba(14, 201, 132, 0.18), transparent 34%),
    linear-gradient(135deg, ${({ theme }) => theme.colors.DarkBlue} 0%, ${({ theme }) => theme.colors.PrimaryPurple} 100%);
  box-shadow: 0 28px 60px rgba(18, 47, 59, 0.18);
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const HeaderCopy = styled.div`
  display: grid;
  gap: 10px;

  h1 {
    margin: 0;
    font-size: clamp(2rem, 3.8vw, 3.2rem);
    line-height: 1;
  }

  p {
    margin: 0;
    max-width: 60ch;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.6;
  }
`;

const ContextStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContextCard = styled.div`
  padding: 16px 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  span {
    display: block;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    font-size: 1.08rem;
    line-height: 1.3;
  }
`;

const ChatCard = styled.section`
  min-height: min(72vh, 780px);
  padding: 24px;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 20px 48px rgba(18, 47, 59, 0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ChatHeader = styled.div`
  display: grid;
  gap: 8px;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.DarkBlue};
  }

  p {
    margin: 0;
    color: rgba(18, 47, 59, 0.68);
    line-height: 1.6;
  }
`;

const PrivateAssistantPage = () => {
  const { token, profile } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!profile || !token) {
    return null;
  }

  const authToken = token;

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
      const data = await chatApi.sendPrivateMessage(trimmedMessage, authToken);
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

  return (
    <PageShell>
      <HeaderCard>
        <HeaderTop>
          <HeaderCopy>
            <h1>Private assistant</h1>
            <p>
              Use o assistente da sua conta para entender saldo, atividade recente e metas financeiras sem sair da
              area autenticada.
            </p>
          </HeaderCopy>

          <Button as="button" type="button" variant="ghost" onClick={() => navigateTo("/app")}>
            Back to dashboard
          </Button>
        </HeaderTop>

        <ContextStrip>
          <ContextCard>
            <span>Client</span>
            <strong>{profile.fullName}</strong>
          </ContextCard>
          <ContextCard>
            <span>Account</span>
            <strong>{profile.accountType}</strong>
          </ContextCard>
          <ContextCard>
            <span>Balance context</span>
            <strong>
              {new Intl.NumberFormat("en-US", { style: "currency", currency: profile.currency }).format(
                profile.availableBalance,
              )}
            </strong>
          </ContextCard>
        </ContextStrip>
      </HeaderCard>

      <ChatCard>
        <ChatHeader>
          <h2>SeedBank account assistant</h2>
          <p>
            Este chat usa o seu contexto autenticado. Pergunte sobre sua conta, transacoes recentes ou objetivos
            financeiros.
          </p>
        </ChatHeader>

        <ChatExperience
          emptyState="Pergunte sobre seu saldo, ultimas transacoes, cartao ou meta financeira."
          input={input}
          inputPlaceholder="Pergunte algo sobre a sua conta"
          isLoading={isLoading}
          loadingButtonLabel="Enviando..."
          loadingLabel="Analisando seu contexto..."
          messages={messages}
          onInputChange={setInput}
          onSubmit={sendMessage}
          submitLabel="Enviar"
        />
      </ChatCard>
    </PageShell>
  );
};

export default PrivateAssistantPage;
