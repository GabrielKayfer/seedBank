import { useEffect, useRef } from "react";
import type { FormEvent } from "react";
import {
  ChatShell,
  Composer,
  ComposerButton,
  ComposerInput,
  EmptyState,
  MessageBubble,
  MessageItem,
  MessagesList,
} from "./styles";

export type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

type ChatExperienceProps = {
  messages: ChatMessage[];
  input: string;
  isLoading: boolean;
  emptyState: string;
  submitLabel: string;
  loadingButtonLabel: string;
  loadingLabel: string;
  inputPlaceholder: string;
  onInputChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ChatExperience({
  messages,
  input,
  isLoading,
  emptyState,
  submitLabel,
  loadingButtonLabel,
  loadingLabel,
  inputPlaceholder,
  onInputChange,
  onSubmit,
}: ChatExperienceProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <ChatShell>
      <MessagesList>
        {messages.length === 0 ? (
          <EmptyState>{emptyState}</EmptyState>
        ) : (
          messages.map((message, index) => (
            <MessageItem key={`${message.role}-${index}`} $role={message.role}>
              <MessageBubble $role={message.role}>{message.text}</MessageBubble>
            </MessageItem>
          ))
        )}

        {isLoading ? (
          <MessageItem $role="bot">
            <MessageBubble $role="bot">{loadingLabel}</MessageBubble>
          </MessageItem>
        ) : null}

        <div ref={messagesEndRef} />
      </MessagesList>

      <Composer onSubmit={onSubmit}>
        <ComposerInput
          aria-label="Digite sua mensagem"
          onChange={(event) => onInputChange(event.target.value)}
          placeholder={inputPlaceholder}
          value={input}
        />
        <ComposerButton disabled={isLoading || !input.trim()} type="submit">
          {isLoading ? loadingButtonLabel : submitLabel}
        </ComposerButton>
      </Composer>
    </ChatShell>
  );
}
