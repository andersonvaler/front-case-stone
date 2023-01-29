import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../pages';

export const RouterComponent: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};
