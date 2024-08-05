import React from 'react'

const Header = () => {
    return (
        <div className="flex justify-between px-8 mt-4">
            <img src="/images/header.png" className="" alt="header" />
            <div className="mr-2 flex justify-center items-center mt-1 rounded-full cursor-pointer"
                style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)", background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))" }}>
                <img src="/images/bell.png" className=" p-2" alt="notification" />
            </div>
        </div>
    )
}

export default Header