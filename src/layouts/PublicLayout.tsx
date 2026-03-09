import styled from "styled-components";
import LandingFooter from "../components/LandingFooter";
import LandingHeader from "../components/LandingHeader";
import { HelpModal } from "../components/HelpModal";
import { sharedShellBackground } from "../styles/shellBackground";
import { PublicLayoutProvider } from "./LayoutContext";
import type { LayoutProps } from "./types";
import { useState } from "react";

const PublicShell = styled.div`
  min-height: 100vh;
  background: ${sharedShellBackground};
`;

const PublicContent = styled.div`
  min-height: 100vh;
  padding-top: 32px;
`;

const PublicLayout = ({ children }: LayoutProps) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const openHelp = () => setIsHelpOpen(true);
  const closeHelp = () => setIsHelpOpen(false);

  return (
    <PublicLayoutProvider value={{ openHelp }}>
      <PublicShell>
        <LandingHeader onHelpClick={openHelp} />
        <HelpModal open={isHelpOpen} onClose={closeHelp} />
        <PublicContent>{children}</PublicContent>
        <LandingFooter />
      </PublicShell>
    </PublicLayoutProvider>
  );
};

export default PublicLayout;
