import { createRoot } from 'react-dom/client'
 import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import AuthWrapper from './Components/Authcontext.jsx'


createRoot(document.getElementById('root')).render(
    <AuthWrapper>
        <BrowserRouter>
            <App />
         </BrowserRouter>
    </AuthWrapper> 
)
