"use client";
import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeClass('fade-out');
    }, 1000); // Start fade out 0.5 seconds before hiding

    return () => {
      clearTimeout(fadeOutTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black z-50 ${fadeClass}`}>
      <img src="/images/splash.png" alt="Splash Screen" className="w-48" />
    </div>
  );
};

export default SplashScreen;
