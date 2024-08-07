'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { GoArrowLeft } from "react-icons/go";


const Header = () => {
    const pathname = usePathname();

    const getHeaderContent = () => {
        switch (pathname) {
            case '/pages/profile':
                return {
                    heading: 'Your Profile',
                    backLink: '/pages/home',
                };
            case '/pages/transactions':
                return {
                    heading: 'Activity',
                    backLink: '/pages/home',
                };
            case '/pages/wallet':
                return {
                    heading: 'Wallet',
                    backLink: '/pages/home',
                };
            default:
                return null;
        }
    };

    const headerContent = getHeaderContent();

    return (
        <div className="flex justify-between px-8 mt-4 items-center">
            {headerContent ? (
                <>
                    <div
                        className="mr-2 flex justify-center items-center p-1 mt-1 rounded-full cursor-pointer"
                        style={{
                            boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)",
                            background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
                        }}
                    >
                        <Link href={headerContent.backLink} passHref>
                            <GoArrowLeft className="w-6 h-6" />
                        </Link>
                    </div>
                    <h1 className="text-center text-lg mt-1 flex-grow">{headerContent.heading}</h1>
                </>
            ) : (
                <img src="/images/header.png" alt="header" />
            )}
            <div
                className="mr-2 flex justify-center items-center mt-1 rounded-full cursor-pointer"
                style={{
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)",
                    background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
                }}
            >
              <Link href={"/notification"}>  <img src="/images/bell.png" className="p-2" alt="notification" /></Link>
            </div>
        </div>
    );
};

export default Header;
