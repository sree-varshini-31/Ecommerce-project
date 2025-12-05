// src/main.jsx (COMPLETE UPDATE)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; // ADD THIS
import { AuthProvider } from "./components/AuthContext.jsx"; // ADD THIS
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>      {/* ADD THIS WRAPPER */}
      <AuthProvider>     {/* ADD THIS WRAPPER */}
        <App />
      </AuthProvider>    {/* ADD THIS */}
    </BrowserRouter>       {/* ADD THIS */}
  </StrictMode>,
)
