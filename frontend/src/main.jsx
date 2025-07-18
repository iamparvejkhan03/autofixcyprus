import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Contact, FAQs, Home, RequestRepair } from './pages';
import { Provider } from 'react-redux';
import { persistor, store } from './App/store.js';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path='' element={<App />}>
                            <Route path='/' element={<Home />} index={true} />
                            <Route path='/faqs' element={<FAQs />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/request-repair' element={<RequestRepair />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>,
)
