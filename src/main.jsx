import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Routing_App from './POC/Routing_App.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
{/* <App /> */}
<Routing_App></Routing_App>
</BrowserRouter>
)
