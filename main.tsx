import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './4/4_6_1/style.css'
import App from './4/4_6_1/App'  // ← УБРАТЬ .tsx

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)