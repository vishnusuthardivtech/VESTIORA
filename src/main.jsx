import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/globals.css'
import App from './App.jsx'
import { useEffect } from 'react'

function MountGuards() {
  // Ensure we never end up stuck in an invisible state due to preloader bugs.
  useEffect(() => {
    document.documentElement.classList.remove('no-scroll')
  }, [])
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MountGuards />
  </StrictMode>,
)


