import Benefits from "../components/Benefits";
import Features from "../components/Features";
import Hero from "../components/Hero";
import InviteSection from "../components/InviteSection";
import TrustSection from "../components/TrustSection";
import { usePublicLayoutActions } from "../layouts/LayoutContext";

const HomePage = () => {
  const { openHelp, openAccount } = usePublicLayoutActions();

  return (
    <>
      <Hero />
      <Features />
      <TrustSection onContactClick={openHelp} />
      <Benefits />
      <InviteSection onOpenAccountClick={openAccount} />
    </>
  );
};

export default HomePage;
