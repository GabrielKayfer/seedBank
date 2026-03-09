import styled from "styled-components";

type AuthLoadingScreenProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

const LoadingWrap = styled.div<{ $compact: boolean }>`
  width: 100%;
  min-height: ${({ $compact }) => ($compact ? "220px" : "320px")};
  display: grid;
  place-items: center;
`;

const LoadingCard = styled.div<{ $compact: boolean }>`
  width: min(100%, ${({ $compact }) => ($compact ? "420px" : "480px")});
  padding: ${({ $compact }) => ($compact ? "24px" : "28px")};
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(45, 114, 143, 0.12);
  box-shadow: 0 18px 48px rgba(18, 47, 59, 0.08);
  backdrop-filter: blur(14px);
  text-align: center;
`;

const Spinner = styled.div`
  width: 52px;
  height: 52px;
  margin: 0 auto 18px;
  border-radius: 999px;
  border: 4px solid rgba(45, 114, 143, 0.14);
  border-top-color: ${({ theme }) => theme.colors.PrimaryPurple};
  animation: spin 0.85s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.DarkBlue};
  font-size: clamp(1.2rem, 2vw, 1.55rem);
`;

const Description = styled.p`
  margin: 10px 0 0;
  color: rgba(18, 47, 59, 0.66);
  line-height: 1.55;
`;

const AuthLoadingScreen = ({
  title = "Loading your account",
  description = "We are preparing your session and syncing the latest account information.",
  compact = false,
}: AuthLoadingScreenProps) => {
  return (
    <LoadingWrap $compact={compact}>
      <LoadingCard $compact={compact}>
        <Spinner />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </LoadingCard>
    </LoadingWrap>
  );
};

export default AuthLoadingScreen;
