import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { GlobalCss } from "./styles/GlobalStyle.ts";
import { theme } from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalCss />
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
