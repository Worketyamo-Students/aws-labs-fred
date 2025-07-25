import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import icon from '../src/assets/Clip path group.svg'

const OtpPage = () => {
  const location = useLocation();
  const email = location.state?.email || '';

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const fullOtp = otp.join('');
    console.log('OTP complet saisi :', fullOtp);
  };

  return (
    <div className=" m-9 p-6 flex items-center justify-center">
      <div className="rounded w-full max-w-sm text-center flex gap-7 flex-col justify-center items-center">
        <img src={icon} alt="" className='h-12'/>
        <div className='flex flex-col gap-0'>
            <h2 className="text-2xl font-bold">Vérification OTP</h2>
            <p className="text-gray-500">Rentrez vos informations pour vous conecter</p>
        </div>
        <div className="flex justify-center gap-4 mb-4 mt-2 w-full ">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-17 h-17 text-center border-1 border-gray-300 bg-gray-100 rounded text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
        >
          Vérifier
        </button>
      </div>
    </div>
  );
};

export default OtpPage;
