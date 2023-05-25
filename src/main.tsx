import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  BrowserRouter
} from 'react-router-dom'
import './index.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)