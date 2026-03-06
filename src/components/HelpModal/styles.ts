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
  height: min(80vh, 700px);
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

export const ChatContainer = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  border-radius: 12px;
`;

export const CloseButton = styled.button`
  border: 0;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;