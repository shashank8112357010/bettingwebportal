'use client'

// import Link from 'next/link';
// import { HiOutlineHome } from "react-icons/hi2";
// import { IoWalletOutline } from "react-icons/io5";
// import { HiOutlineUser } from "react-icons/hi2";
// import { PiClipboardTextLight } from "react-icons/pi";
// import { usePathname } from 'next/navigation';

// const Footer = () => {
//   const pathname = usePathname();

//   const getActiveStyle = (path) => {
//     return pathname === path ? {
//       background: 'linear-gradient(rgba(255, 226, 77, 0.012), rgba(255, 190, 24, 0.5))',
//       borderBottom:'1px solid rgba(255, 226, 77)',
//     //   borderRadius: '50%',
//     } : {};
//   };

//   return (
//     <div
//       className="fixed max-w-[420px] z-50 bottom-0 left-0 right-0 text-white flex justify-around items-center h-12 shadow-lg mx-4 my-4 rounded-2xl border border-gray-800"
//       style={{
//         boxShadow: "0 0 10px rgba(255, 255, 255, 0.15), 0 0 10px rgba(255, 255, 255, 0.02)",
//         background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
//       }}
//     >
//       <Link href="/home" passHref>
//         <div className='p-2' style={getActiveStyle('/home')}>
//           <HiOutlineHome className="w-6 h-6" />
//         </div>
//       </Link>
//       <Link href="/transactions" passHref>
//         <div className='p-2' style={getActiveStyle('/transactions')}>
//           <PiClipboardTextLight className="w-6 h-6" />
//         </div>
//       </Link>
//       <Link href="/wallet" passHref>
//         <div className='p-2' style={getActiveStyle('/wallet')}>
//           <IoWalletOutline className="w-6 h-6" />
//         </div>
//       </Link>
//       <Link href="/profile" passHref>
//         <div className='p-2' style={getActiveStyle('/profile')}>
//           <HiOutlineUser className="w-6 h-6" />
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import Link from 'next/link';
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";
import { PiClipboardTextLight } from "react-icons/pi";
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const getActiveStyle = (path) => {
    return pathname === path ? {
      background: 'linear-gradient(rgba(255, 226, 77, 0.012), rgba(255, 190, 24, 0.5))',
      borderBottom:'1px solid rgba(255, 226, 77)',
    } : {};
  };

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-white flex justify-around items-center h-12 shadow-lg w-[90%] max-w-[400px] z-50 rounded-2xl border border-gray-800  bg-black bg-gradient-to-r from-[#ffffff33] to-[#ffffff1a]"
      style={{
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.15), 0 0 10px rgba(255, 255, 255, 0.02)",
        // background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
      }}
    >
      <Link href="/pages/home" passHref prefetch={true}>
        <div className='p-2' style={getActiveStyle('/pages/home')}>
          <HiOutlineHome className="w-6 h-6" />
        </div>
      </Link>
      <Link href="/pages/transactions" passHref prefetch={true}>
        <div className='p-2' style={getActiveStyle('/pages/transactions')}>
          <PiClipboardTextLight className="w-6 h-6" />
        </div>
      </Link>
      <Link href="/pages/wallet" passHref prefetch={true}>
        <div className='p-2' style={getActiveStyle('/pages/wallet')}>
          <IoWalletOutline className="w-6 h-6" />
        </div>
      </Link>
      <Link href="/pages/profile" passHref prefetch={true}>
        <div className='p-2' style={getActiveStyle('/pages/profile')}>
          <HiOutlineUser className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
};

export default Footer;
