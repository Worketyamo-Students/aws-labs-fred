
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { FormEvent } from 'react';
import icon from '../src/assets/Clip path group.svg'

  const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/otp', { state: { email } });
  };

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5">
      <form
        onSubmit={handleSubmit}
        className=" p-8 flex justify-center gap-9 items-center flex-col"
      >
        <img src={icon} alt="" className='h-10' />
        <div className='flex flex-col items-center justify-center'>
            <h2 className="text-2xl font-bold ">Creation de compte</h2>
            <p className='text-[15px] text-gray-500 text-center'>Rentree vos informations pour créer votre compte</p>
        </div>
        <div className='flex flex-col justify-center w-100'>
            <label htmlFor="" className='text-gray-500 font-bold'>Email</label>
            <input
                type="email"
                placeholder="abc@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 p-2 w-full mb-4 rounded-xl border-gray-200 bg-gray-100 outline-none"
                required
            />
            <label htmlFor="" className='text-gray-500 font-bold'>Mot de passe</label>
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 p-2 w-full mb-4 rounded-xl border-gray-200 bg-gray-100 outline-none"
                required
            />
            <div className='flex flex-col justify-center items-center gap-6'>
                <p className='bg-white w-28 text-[13px] text-center text-gray-300'>OU AVEC</p>
                <div className='flex gap-1 border-2 w-full cursor-pointer justify-center h-10 items-center rounded-md border-gray-300 bg-gray-200 hover:bg-gray-50 transition duration-300'>
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                    <p>Github</p>
                </div>
                <div className='flex gap-1 border-2 w-full cursor-pointer justify-center h-10 items-center rounded-md border-gray-300 bg-gray-200 hover:bg-gray-50 transition duration-300'>
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path></svg>
                    <p>Google</p>
                </div>
                <button
                    type="submit"
                    className="bg-blue-800 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full"
                    >
                    Créer le compte
                </button>

                <div className='flex items-center justify-center text-center'>
                    <p className='text-gray-500'>By clicking continue you agree to our <span className='underline cursor-pointer'>Terms of Service</span> and <span className='underline cursor-pointer'>Privacy Plolicy</span></p>
                </div>
            </div>
        </div>
      </form>
       <div className='flex items-centerh-20 justify-center m-4 mt-20 p-3 gap-2 w-100'>
        <div className='h-[5px] w-1/4 rounded-2xl bg-orange-300'></div>
        <div className='h-[5px] w-1/4 rounded-2xl bg-gray-200'></div>
        <div className='h-[5px] w-1/4 rounded-2xl bg-gray-200'></div>
        <div className='h-[5px] w-1/4 rounded-2xl bg-gray-200'></div>
      </div>
    </div>
  );
};

export default SignupPage;
