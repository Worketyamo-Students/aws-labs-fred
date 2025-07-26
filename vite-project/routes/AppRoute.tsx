import { Route, Routes } from 'react-router-dom';
import SignupPage from '../pages/SignupPage';
import OtpPage from '../pages/OtpPage';
import FinalizePage from '../pages/FinalizePage';
import WelcomePage from '../pages/welcomePage'


export default function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/finalisation" element={<FinalizePage/>} />
        <Route path="/bienvenue" element={<WelcomePage/>} />
        </Routes>
    );
}

