import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WindowSizeProvider } from './components/WindowSizeContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WindowSizeProvider>
      <App />
    </WindowSizeProvider>
  </StrictMode>,
)
