"use client";
import LoginForm from '../../components/form/loginForm';

const Login = () => {
  return (
    <div className='flex justify-center'>
      <div className="container min-h-screen flex flex-col items-center max-w-[420px] w-full bg-black rounded-2xl"
      style={{ boxShadow: "0 4px 6px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(255, 255, 255, 0.5)" }}>
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
