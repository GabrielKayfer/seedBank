import styled from "styled-components";

type MessageRole = "user" | "bot";

export const ChatShell = styled.div`
  flex: 1;
  min-height: 0;
  border-radius: 12px;
  background: #f7f8fc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MessagesList = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MessageItem = styled.div<{ $role: MessageRole }>`
  display: flex;
  justify-content: ${({ $role }) => ($role === "user" ? "flex-end" : "flex-start")};
`;

export const MessageBubble = styled.div<{ $role: MessageRole }>`
  max-width: min(85%, 560px);
  padding: 12px 14px;
  border-radius: 16px;
  white-space: pre-wrap;
  line-height: 1.5;
  background: ${({ $role }) => ($role === "user" ? "#1d4ed8" : "#ffffff")};
  color: ${({ $role }) => ($role === "user" ? "#ffffff" : "#1f2937")};
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
`;

export const EmptyState = styled.div`
  margin: auto;
  max-width: 360px;
  text-align: center;
  color: #4b5563;
  line-height: 1.5;
`;

export const Composer = styled.form`
  display: flex;
  gap: 12px;
  padding: 16px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  background: #ffffff;
`;

export const ComposerInput = styled.input`
  flex: 1;
  min-width: 0;
  border: 1px solid rgba(15, 23, 42, 0.14);
  border-radius: 999px;
  padding: 12px 16px;
  font: inherit;
  color: #111827;

  &:focus {
    outline: none;
    border-color: #1d4ed8;
    box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);
  }
`;

export const ComposerButton = styled.button`
  border: 0;
  border-radius: 999px;
  padding: 0 18px;
  font: inherit;
  font-weight: 600;
  color: #ffffff;
  background: #1d4ed8;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
