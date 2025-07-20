import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initMobileFontFallback, addMobileFontCSS } from './utils/fontFallback.js'

// Initialize mobile font fallback immediately
addMobileFontCSS();

// Also initialize after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMobileFontFallback();
});

// Initialize after React renders
setTimeout(() => {
  initMobileFontFallback();
}, 2000);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
