import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InviteSection from "./components/InviteSection";
import TrustSection from "./components/TrustSection";
import { useState } from "react";
import { HelpModal } from "./components/HelpModal"; 



function App() {

  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
    <Header onHelpClick={() => setIsHelpOpen(true)}/>
    <HelpModal open={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    <Hero/>
    <Features/>
    <TrustSection/>
    <Benefits/>
    <InviteSection/>
    <Footer/>
    </>
  )
}

export default App
