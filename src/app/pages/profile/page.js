import React from 'react';
import "@/app/styles/toggel.css"
import Header from '../../components/small/header';
import Footer from '../../components/small/footer';
import { FaRegBell } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import { LuGift } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { ReverseButton } from '../../components/small/button';
import Amount from '../../components/small/amount';
const Profile = () => {
    const user = {
        id: '0013231321',
        name: 'Shashank',
        lastLogin: '2024-08-02',
        balance: '₹ 10000'
    };
    return (
        <div className='flex flex-col items-center sm:shadow-lg'>
            <div className="container max-w-[420px] rounded-2xl relative min-h-screen"
            style={{ boxShadow: "0 4px 6px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(255, 255, 255, 0.5)" }}
            >
                {/* Header */}
                <Header />
                {/* <div className="flex justify-between items-center p-4">
                <IoMdArrowBac className="text-white w-6 h-6" />
                <h2 className="text-white text-lg">Your Profile</h2>
                <FiBell className="text-white w-6 h-6" />
                </div> */}

                {/* Profile Details */}
                <div className="text-center p-4">
                    <div className='flex gap-2 ml-4 justify-start items-center'>
                        <img src="/images/Profile.png" alt="User Avatar" className="rounded-full" />
                        <div className='flex flex-col items-start'>
                            <p className="text-primaryYellow text-xs">ID : {user.id}</p>
                            <h3 className="text-white font-medium">{user.name}</h3>
                            <p className="text-primaryGray text-xs">Last Login: {user.lastLogin}</p>
                        </div>
                    </div>
                    <Amount balance={user.balance} />
                </div>

                {/* Profile Options */}
                <div className="text-white p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <FaRegBell className="w-5 h-5 mr-2" />
                            <span>Notifications</span>
                        </div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <RiUserAddLine className="w-5 h-5 mr-2" />
                        <span>Referral & Share</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <LuGift className="w-5 h-5 mr-2" />
                        <span>Rewards</span>
                    </div>
                    <div className="flex items-center">
                        <FaRegCircleQuestion className="w-5 h-5 mr-2" />
                        <span>Help & Support</span>
                    </div>
                </div>
                <div className='w-[80%] mx-[42px] mt-4 flex items-center justify-center'>
                    <ReverseButton>Log Out</ReverseButton>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Profile;
