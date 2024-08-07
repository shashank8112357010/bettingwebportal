// Register.js
"use client";
import RegisterForm  from '@/app/components/form/registerForm';

const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="container min-h-screen flex flex-col items-center max-w-[420px] w-full bg-black rounded-2xl"
      style={{ boxShadow: "0 4px 6px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(255, 255, 255, 0.5)" }}>
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
