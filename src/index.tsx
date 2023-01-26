import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import { Providers } from './providers';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Providers>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<App />} />
                </Routes>
            </BrowserRouter>
        </Providers>
    </React.StrictMode>,
);

reportWebVitals();
