import { useState } from "react";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HelpModal } from "./components/HelpModal";
import Hero from "./components/Hero";
import InviteSection from "./components/InviteSection";
import TrustSection from "./components/TrustSection";

function App() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const openHelp = () => setIsHelpOpen(true);
  const closeHelp = () => setIsHelpOpen(false);

  return (
    <>
      <Header onHelpClick={openHelp} />
      <HelpModal open={isHelpOpen} onClose={closeHelp} />
      <Hero />
      <Features />
      <TrustSection onContactClick={openHelp} />
      <Benefits />
      <InviteSection onOpenAccountClick={openHelp} />
      <Footer />
    </>
  );
}

export default App;
