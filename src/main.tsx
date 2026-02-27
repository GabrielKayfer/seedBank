import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'
import { GlobalCss } from './styles/GlobalStyle.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
