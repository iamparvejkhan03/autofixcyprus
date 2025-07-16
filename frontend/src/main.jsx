import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './pages';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='' element={<App />}>
                    <Route path='/' element={<Home />} index={true} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
