// components/Notification.js

import Link from 'next/link';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';

const notifications = [
    {
        id: 1,
        title: 'LOGIN NOTIFICATION',
        date: '2024-08-06 22:30:56',
        message: 'Your account is logged in 2024-08-06 22:30:56',
    },
    {
        id: 2,
        title: 'NEW MEMBER',
        date: '2024-07-27 23:19:31',
        message: 'Thank you for becoming a beloved member of this platform. We provide many industry-leading games. This is the world\'s leading gaming platform. Try the lottery game developed by us. While enjoying the best gaming experience, you can also join unlimited agents and stay at home to earn money.',
    },
];

const Notification = () => {
    return (
        <div className="flex flex-col items-center sm:shadow-lg">
            <div className="container max-w-[420px] w-full rounded-2xl p-4 min-h-screen"
            style={{ boxShadow: "0 4px 6px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(255, 255, 255, 0.5)" }}>
            
                <div className='flex justify-start gap-32 items-center mb-6'>
                    <Link href={"/home"} passHref prefetch={true}>
                        <GoArrowLeft className="w-6 h-6" />
                    </Link>
                    <h1 className="text-center text-xl text-white">Notification</h1>
                </div>
                {notifications.map((notification) => (
                    <div key={notification.id} className="border border-gray-800 rounded-xl p-4 mb-4 shadow-lg"
                        style={{
                            // boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)",
                            background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
                        }}>
                        <div className="flex justify-between items-center">
                            <h2 className="text-white text-lg">{notification.title}</h2>
                            <FiTrash2 className="text-gray-400 cursor-pointer" />
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{notification.date}</p>
                        <p className="text-gray-300">{notification.message}</p>
                    </div>
                ))}
                <p className="text-center text-primaryGray mt-4">No more</p>
            </div>
        </div>
    );
};

export default Notification;
