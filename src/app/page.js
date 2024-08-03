"use client"
import Image from "next/image";
import RegisterPage from "./auth/register/page";
import SplashScreen from "./components/splash.js";
import { useEffect, useState } from "react";
import Home from "./components/home/home";

export default function App() {
    const [isSplashVisible, setIsSplashVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsSplashVisible(false);
      }, 2000); // Show splash screen for 3 seconds
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <>
        {isSplashVisible && <SplashScreen />}
        {!isSplashVisible && <Home />}
      </>
    );
  }
