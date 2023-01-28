import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { HomePage } from './pages';
import { Providers } from './providers';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Providers>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </Providers>
    </React.StrictMode>,
);

reportWebVitals();
