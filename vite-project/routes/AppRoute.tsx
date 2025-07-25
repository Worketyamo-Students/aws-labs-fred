import { Route, Routes } from 'react-router-dom';
import SignupPage from '../pages/SignupPage';
import OtpPage from '../pages/OtpPage';
//import FinalizePage from '../pages/FinalizePage';

export default function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage />} />
        </Routes>
    );
}

