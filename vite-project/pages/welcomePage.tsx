
import icon from '../src/assets/Clip path group.svg'
import img from '../src/assets/images 2.svg'
import logo from '../src/assets/logo (1) 1.svg'

const WelcomePage = () => {

  return (
    <div className='flex justify-center mt-10 w-full'>
        <div className='w-1/3 mt-20 bg-gray-50 rounded-xl p-15 flex flex-col gap-10'>
            <img src={logo} alt="" className='h-15 w-90' />
            <div className='flex flex-col'>
               <div>
                    <div className='flex items-center gap-3'>
                        <div className=' border-2 border-gray-300 w-13 h-13 flex justify-center items-center rounded-xl'>
                            <svg className='h-6 text-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>
                        </div>
                        <div>
                            <h2 className='text-gray-400'>Inscription</h2>
                            <p className='text-gray-400'>Entrez vos informations personnelles</p>
                        </div>
                    </div>
                    <div className='bg-gray-300 h-13 w-[2px] ml-6'></div>
               </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <div className=' border-2 border-gray-300 w-13 h-13 flex justify-center items-center rounded-xl'>
                            <svg className='h-6 text-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 14H20V7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V14ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM19 22L15.4645 18.4645L16.8787 17.0503L19 19.1716L22.5355 15.636L23.9497 17.0503L19 22Z"></path></svg>                        </div>
                        <div>
                            <h2 className='text-gray-400'>Validation OTP</h2>
                            <p className='text-gray-400'>Entrez vos informations personnelles</p>
                        </div>
                    </div>
                    <div className='bg-gray-300 h-13 w-[2px] ml-6'></div>
               </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <div className=' border-2 border-gray-300 w-13 h-13 flex justify-center items-center rounded-xl'>
                            <svg className='h-6 text-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path></svg>                        </div>
                        <div>
                            <h2 className='text-gray-400'>Invitez vos amis</h2>
                            <p className='text-gray-400'>Envoyez des invitations à vos amis</p>
                        </div>
                    </div>
                    <div className='bg-gray-300 h-13 w-[2px] ml-6'></div>
               </div>
               <div>
                    <div className='flex items-center gap-3'>
                        <div className=' border-2 border-gray-300 w-13 h-13 flex justify-center items-center rounded-xl'>
                            <svg className='h-6 text-gray-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.99958 12.9999C4.99958 7.91198 7.90222 3.5636 11.9996 1.81799C16.0969 3.5636 18.9996 7.91198 18.9996 12.9999C18.9996 13.8229 18.9236 14.6264 18.779 15.4027L20.7194 17.2353C20.8845 17.3913 20.9238 17.6389 20.815 17.8383L18.3196 22.4133C18.1873 22.6557 17.8836 22.7451 17.6412 22.6128C17.5993 22.59 17.5608 22.5612 17.5271 22.5274L15.2925 20.2928C15.1049 20.1053 14.8506 19.9999 14.5854 19.9999H9.41379C9.14857 19.9999 8.89422 20.1053 8.70668 20.2928L6.47209 22.5274C6.27683 22.7227 5.96025 22.7227 5.76498 22.5274C5.73122 22.4937 5.70246 22.4552 5.67959 22.4133L3.18412 17.8383C3.07537 17.6389 3.11464 17.3913 3.27975 17.2353L5.22014 15.4027C5.07551 14.6264 4.99958 13.8229 4.99958 12.9999ZM6.47542 19.6957L7.29247 18.8786C7.85508 18.316 8.61814 17.9999 9.41379 17.9999H14.5854C15.381 17.9999 16.1441 18.316 16.7067 18.8786L17.5237 19.6957L18.5056 17.8955L17.4058 16.8568C16.9117 16.3901 16.6884 15.7045 16.8128 15.0364C16.9366 14.3722 16.9996 13.6911 16.9996 12.9999C16.9996 9.13037 15.0045 5.69965 11.9996 4.04033C8.99462 5.69965 6.99958 9.13037 6.99958 12.9999C6.99958 13.6911 7.06255 14.3722 7.18631 15.0364C7.31078 15.7045 7.08746 16.3901 6.59338 16.8568L5.49353 17.8955L6.47542 19.6957ZM11.9996 12.9999C10.895 12.9999 9.99958 12.1045 9.99958 10.9999C9.99958 9.89537 10.895 8.99994 11.9996 8.99994C13.1041 8.99994 13.9996 9.89537 13.9996 10.9999C13.9996 12.1045 13.1041 12.9999 11.9996 12.9999Z"></path></svg>                        </div>
                        <div>
                            <h2 className='font-semibold'>Bienvenu à worketyamo</h2>
                            <p className='text-gray-400'>Votre inscription est terminée.</p>
                        </div>
                    </div>
               </div>
            </div>
            <div className='flex justify-between items-center mt-20'>
                <div className='flex justify-center items-center gap-2'>
                    <svg className='h-5 w-5 text-blue-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path></svg>
                    <h1 className='text-blue-700 cursor-pointer'>Vos details</h1>
                </div>
                <h1 className='text-blue-700 cursor-pointer'>Signin</h1>
            </div>
        </div>
        <div className="mt-20 flex flex-col items-center justify-center gap-8 w-1/3">
            <img src={icon} alt="" className='h-12' />
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-2xl'>Bienvenue</h1>
                <p className='text-gray-500'>Plus que 3 petites minutes....</p>
            </div>
            <img src={img} alt="" className='h-52'/>
            <button
            className="bg-blue-800 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-90"
            >
            Creer le compte
            </button>
            <div className='flex w-80 m-8 items-center justify-center text-center'>
                <p className='text-gray-500'>By clicking continue you agree to our <span className='underline cursor-pointer'>Terms of Service</span> and <span className='underline cursor-pointer'>Privacy Plolicy</span></p>
            </div>
            <div className='mt-15 flex w-90 items-centerh-20 justify-center m-4 p-3 gap-2'>
                <div className='h-[5px] w-1/4 rounded-2xl bg-orange-300'></div>
                <div className='h-[5px] w-1/4 rounded-2xl bg-orange-400'></div>
                <div className='h-[5px] w-1/4 rounded-2xl bg-gradient-to-r from-orange-400 to-blue-950 from-5%'></div>
                <div className='h-[5px] w-1/4 rounded-2xl bg-blue-900'></div>
            </div>
       </div>
    </div>
  );
};

export default WelcomePage;
