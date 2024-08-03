import React from 'react';

export const HomeButton = ({ children, onClick }) => {
    return (
      <div
        className='relative rounded-xl px-4 py-3 cursor-pointer font-medium bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-900'
        // style={{
        //     background: 'linear-gradient(90.3deg, #FFD300 16%, #FF6800 60%, rgba(255, 0, 0, 0.15) 101.62%)',
        //     // backgroundImage: 'linear-gradient(to right, #fee273, #f7ca58, #f0b140, #e9972a, #e17d15, #cf6a10, #bd580a, #ab4606, #8d3a08, #6f2e09, #532306, #391801)',
        //     // backgroundImage: 'linear-gradient(to right, #FFD300  20%, #FF4E50  51%, rgba(255, 0, 0, 0.15)  100%)',


        // //   background: 'linear-gradient(90.3deg, #FFF600 0.1%, #FF6800 60%, #733F00 101.62%)',
        //   overflow: 'hidden'
        // }}
        onClick={onClick}
      >
         
        <div
          className='absolute inset-0 bg-black opacity-25 '
          style={{
            borderRadius: 'inherit'
          }}
        ></div>
        <div className='relative text-center text-white'>{children}</div>
      </div>
    );
  };

export const Button = ({ children,onClick }) => {
    return (
      <div onClick={onClick} className='rounded-lg px-6 py-2 font-medium cursor-pointer bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-900' 
    //   style={{ background: 'linear-gradient(90.3deg, #F9C809 0.16%, rgba(255, 0, 0, 0.15) 101.62%)' }}
      >
        {children}
      </div>
    );
  }

