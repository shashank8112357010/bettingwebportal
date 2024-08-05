'use client'

import Link from 'next/link';
import { HiOutlineHome } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { PiClipboardTextLight } from "react-icons/pi";
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const getActiveStyle = (path) => {
    return pathname === path ? {
      background: 'linear-gradient(rgba(255, 226, 77, 0.012), rgba(255, 190, 24, 0.5))',
      borderBottom:'1px solid rgba(255, 226, 77)',
    //   borderRadius: '50%',
      padding: '5px',
    } : {};
  };

  return (
    <div
      className="absolute bottom-0 left-0 right-0 text-white flex justify-around items-center h-12 shadow-lg mx-4 my-4 rounded-2xl border border-gray-800"
      style={{
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.15), 0 0 10px rgba(255, 255, 255, 0.02)",
        background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
      }}
    >
      <Link href="/home" passHref>
        <div style={getActiveStyle('/home')}>
          <HiOutlineHome className="w-6 h-6" />
        </div>
      </Link>
      <Link href="/transactions" passHref>
        <div style={getActiveStyle('/transactions')}>
          <PiClipboardTextLight className="w-6 h-6" />
        </div>
      </Link>
      <Link href="/wallet" passHref>
        <div style={getActiveStyle('/wallet')}>
          <IoWalletOutline className="w-6 h-6" />
        </div>
      </Link>
      <Link href="/profile" passHref>
        <div style={getActiveStyle('/profile')}>
          <HiOutlineUser className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
