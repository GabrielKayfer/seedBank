import { useState } from "react";
import { PublicChatModal } from "../components/PublicChatModal";
import styled from "styled-components";
import LandingFooter from "../components/LandingFooter";
import LandingHeader from "../components/LandingHeader";
import { navigateTo } from "../router/navigation";
import { sharedShellBackground } from "../styles/shellBackground";
import { PublicLayoutProvider } from "./LayoutContext";
import type { LayoutProps } from "./types";

const PublicShell = styled.div`
  min-height: 100vh;
  background: ${sharedShellBackground};
`;

const PublicContent = styled.div`
  min-height: 100vh;
  padding-top: 32px;
`;

const PublicLayout = ({ children }: LayoutProps) => {
  const [isPublicChatOpen, setIsPublicChatOpen] = useState(false);

  const openHelp = () => setIsPublicChatOpen(true);
  const openAccount = () => navigateTo("/login");

  return (
    <PublicLayoutProvider value={{ openHelp, openAccount }}>
      <PublicShell>
        <LandingHeader onGetStartedClick={openAccount} onHelpClick={openHelp} />
        <PublicContent>{children}</PublicContent>
        <LandingFooter />
        <PublicChatModal open={isPublicChatOpen} onClose={() => setIsPublicChatOpen(false)} />
      </PublicShell>
    </PublicLayoutProvider>
  );
};

export default PublicLayout;
