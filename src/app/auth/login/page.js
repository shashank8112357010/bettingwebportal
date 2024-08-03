"use client";
import LoginForm from '@/app/components/form/loginForm';

const Login = () => {
  return (
    <div className='flex justify-center bg-white'>
      <div className="min-h-screen flex flex-col items-center max-w-[390px] w-full bg-black">
        <div className="w-full rounded-lg px-8 py-4">
          <div className="flex justify-center mb-10">
            <img src="/images/splash.png" alt="Sitara Logo" className="w-24" />
          </div>
          <h1 className="text-3xl font-bold text-center text-white">Welcome Back!</h1>
          <p className="text-center text-primaryGray mb-20">We missed you</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
