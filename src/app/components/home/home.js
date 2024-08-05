"use client";
// components/SplashScreen.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ReverseButton } from '../small/button';

const Home = () => {
    return (
        <div className='flex justify-center bg-white'>
            <div className=" inset-0 flex flex-col gap-4 items-center justify-center bg-black max-w-[390px] z-50 p-4 h-screen">
                <img src="/images/splash.png" alt="Splash Screen" className="w-32 sm:w-48" />
                <div className="text-center text-white">
                    <h1 className="text-xl sm:text-2xl font-bold">Welcome to Sitara Betting App</h1>
                    <p className="text-sm sm:text-base mt-2">Here you can play different games and win big Rewards</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
                    <Link href="/auth/register">
                        <ReverseButton className="w-full sm:w-auto">Register</ReverseButton>
                    </Link>
                    <Link href="/auth/login">
                        <ReverseButton className="w-full sm:w-auto">Login</ReverseButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
