import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import icon from '../src/assets/Clip path group.svg'

const FinalisationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    navigate('/bienvenue', { state: { name: formData.firstName } });
  };

  return (
    <div className="p-10 mt-20 flex flex-col items-center justify-center gap-4">
        <img src={icon} alt="" className='h-12'/>
        <div className='flex flex-col justify-center items-center'>
            <h2 className="text-3xl font-bold">Finalisation</h2>
            <p className="text-gray-500">Inviter 04 amis pour finaliser l'inscription</p>
        </div>        <input
          name="firstName"
          type="text"
          placeholder="Numero whatsapp"
          value={formData.firstName}
          onChange={handleChange}
          className="border-2 p-2 w-90 mb-4 rounded-md border-gray-200 bg-gray-100 outline-none"

        />
        <input
          name="lastName"
          type="text"
          placeholder="Numero whatsapp"
          value={formData.lastName}
          onChange={handleChange}
          className="border-2 p-2 w-90 mb-4 rounded-md border-gray-200 bg-gray-100 outline-none"

        />
        <input
          name="username"
          type="text"
          placeholder="Numero whatsapp"
          value={formData.username}
          onChange={handleChange}
          className="border-2 p-2 w-90 mb-4 rounded-md border-gray-200 bg-gray-100 outline-none"

        />
        <input
          name="password"
          type="password"
          placeholder="Numero whatsapp"
          value={formData.password}
          onChange={handleChange}
          className="border-2 p-2 w-90 mb-4 rounded-md border-gray-200 bg-gray-100 outline-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-800 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-90"
        >
          Finaliser
        </button>
        <div className='flex w-90 m-8 items-center justify-center text-center'>
            <p className='text-gray-500'>By clicking continue you agree to our <span className='underline cursor-pointer'>Terms of Service</span> and <span className='underline cursor-pointer'>Privacy Plolicy</span></p>
        </div>
        <div className='mt-15 flex w-90 items-centerh-20 justify-center m-4 p-3 gap-2'>
            <div className='h-[5px] w-1/4 rounded-2xl bg-orange-300'></div>
            <div className='h-[5px] w-1/4 rounded-2xl bg-orange-400'></div>
            <div className='h-[5px] w-1/4 rounded-2xl bg-gradient-to-r from-orange-400 to-blue-950 from-5%'></div>
            <div className='h-[5px] w-1/4 rounded-2xl bg-gray-200'></div>
        </div>
    </div>
  );
};

export default FinalisationPage;
