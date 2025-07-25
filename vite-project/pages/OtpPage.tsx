import { useState, useRef } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import icon from '../src/assets/Clip path group.svg'

const OtpPage = () => {
  const location = useLocation();
  const email = location.state?.email || '';
  const navigate = useNavigate()
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


    const handleVerify = () => {
        // vérification OTP fictive ici
        navigate('/finalisation', { state: { email } });
    }
  return (
    <div className=" m-9 p-6 flex items-center justify-center">
      <div className="mt-20 rounded w-full max-w-sm text-center flex gap-7 flex-col justify-center items-center">
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
              className="w-17 h-17 text-center border-1 border-gray-300 bg-gray-100 rounded text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="bg-blue-900 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 w-full"
        >
          Creer le compte
        </button>
         <div className='flex items-center justify-center text-center'>
                <p className='text-gray-500'>By clicking continue you agree to our <span className='underline cursor-pointer'>Terms of Service</span> and <span className='underline cursor-pointer'>Privacy Plolicy</span></p>
         </div>

        <div className='mt-50 flex items-centerh-20 w-full justify-center m-4 p-3 gap-2'>
            <div className='h-[5px] w-1/4 rounded-2xl bg-orange-300'></div>
            <div className='h-[5px] w-1/4 rounded-2xl bg-orange-400'></div>
            <div className='h-[5px] w-1/4 rounded-2xl bg-gray-200'></div>
            <div className='h-[5px] w-1/4 rounded-2xl bg-gray-200'></div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
