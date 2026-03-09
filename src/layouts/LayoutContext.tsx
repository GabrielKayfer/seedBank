import type { ReactNode } from "react";
import { createContext, useContext } from "react";

type PublicLayoutContextValue = {
  openHelp: () => void;
};

const PublicLayoutContext = createContext<PublicLayoutContextValue | null>(null);

export function PublicLayoutProvider({ children, value }: { children: ReactNode; value: PublicLayoutContextValue }) {
  return <PublicLayoutContext.Provider value={value}>{children}</PublicLayoutContext.Provider>;
}

export function usePublicLayoutActions() {
  const context = useContext(PublicLayoutContext);

  if (!context) {
    throw new Error("usePublicLayoutActions must be used within PublicLayout.");
  }

  return context;
}
