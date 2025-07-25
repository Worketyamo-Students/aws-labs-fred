import { useLocation } from 'react-router-dom';

const OtpPage = () => {
  const location = useLocation();
  const email = location.state?.email || '';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4">Vérification OTP</h2>
        <p className="mb-4">Un code de vérification a été envoyé à :</p>
        <p className="text-blue-600 font-semibold">{email}</p>

        <input
          type="text"
          placeholder="Entrer le code OTP"
          className="border p-2 w-full mt-4"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full mt-4">
          Vérifier
        </button>
      </div>
    </div>
  );
};

export default OtpPage;
