import styled from "styled-components";
import { sharedShellBackground } from "../styles/shellBackground";
import type { LayoutProps } from "./types";

const AppShell = styled.div`
  min-height: 100vh;
  background: ${sharedShellBackground};
  padding: 32px 16px 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 40px 24px 56px;
  }
`;

const AppMain = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <AppShell>
      <AppMain>{children}</AppMain>
    </AppShell>
  );
};

export default AppLayout;
