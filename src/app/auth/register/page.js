// Register.js
"use client";
import RegisterForm  from '@/app/components/form/registerForm';

const Register = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="min-h-screen flex flex-col items-center max-w-[390px] w-full bg-black">
        <div className="flex justify-center mb-10 mt-4">
          <img src="/images/splash.png" alt="Sitara Logo" className="w-24" />
        </div>
        <h1 className="text-4xl font-bold text-center text-white">Just step Away</h1>
        <p className="text-center text-sm text-primaryGray mb-8">Claim your bonus on registration</p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
