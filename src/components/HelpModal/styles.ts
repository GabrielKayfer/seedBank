import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalBox = styled.div`
  width: min(720px, calc(100% - 32px));
  border-radius: 12px;
  padding: 16px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    margin: 0;
  }

  p {
    margin: 4px 0 0;
    opacity: 0.75;
  }
`;

export const Messages = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 12px;
  height: 280px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MessageBubble = styled.div<{ $role: "user" | "assistant" }>`
  max-width: 80%;
  padding: 10px 12px;
  border-radius: 12px;
  line-height: 1.3;
  white-space: pre-wrap;

  align-self: ${(p) => (p.$role === "user" ? "flex-end" : "flex-start")};
  background: ${(p) =>
    p.$role === "user" ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.04)"};
`;

export const Composer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  flex: 1;
  border-radius: 10px;
  padding: 10px 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  outline: none;

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SendButton = styled.button`
  border: 0;
  border-radius: 10px;
  padding: 0 14px;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  border: 0;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;