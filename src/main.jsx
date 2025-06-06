import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// No importamos CSS de Tailwind aquí, ya que usaremos Bootstrap y CSS personalizado en index.html
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
