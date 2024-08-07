import React from 'react';
import '@/app/styles/button.css';

export const HomeButton = ({ children, type }) => {
  return (
    <button
      type={type}
      className='relative rounded-xl px-4 py-3 cursor-pointer font-medium bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-900 text-center text-white w-full'
    >
      {children}
    </button>
  );
};

export const Button = ({ children, onClick }) => {
  return (
    <div className="container2">
      <button className="button2">{children}</button>
    </div>
  );
}

export const ReverseButton = ({ children, onClick}) => {
  return (
    <div className="container1">
      <button className="button1">{children}</button>
    </div>
  )
}
