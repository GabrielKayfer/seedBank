import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import AuthHeader from "../components/AuthHeader";
import AuthLoadingScreen from "../components/AuthLoadingScreen";
import { sharedShellBackground } from "../styles/shellBackground";
import type { LayoutProps } from "./types";

const AuthShell = styled.div`
  min-height: 100vh;
  background: ${sharedShellBackground};
`;

const AuthMain = styled.main`
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px 24px 56px;
  }
`;

const AuthLayout = ({ children }: LayoutProps) => {
  const { isLoadingAuth, token, profile } = useAuth();

  const isBootstrappingSession = isLoadingAuth && Boolean(token) && !profile;

  return (
    <AuthShell>
      <AuthHeader />
      <AuthMain>
        {isBootstrappingSession ? (
          <AuthLoadingScreen compact title="Restoring your session" description="Checking your saved token and loading your account details." />
        ) : (
          children
        )}
      </AuthMain>
    </AuthShell>
  );
};

export default AuthLayout;
