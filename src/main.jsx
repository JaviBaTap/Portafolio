import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@radix-ui/themes/styles.css'   // 1) CSS de Radix PRIMERO
import './index.css'                    // 2) tu CSS después
import { Theme } from '@radix-ui/themes'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme accentColor="purple" grayColor="mauve" radius="large" appearance="light">
      <App />
    </Theme>
  </StrictMode>,
)