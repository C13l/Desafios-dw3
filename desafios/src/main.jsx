import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { UserProvider } from './context/UserContext.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
</StrictMode>
)
