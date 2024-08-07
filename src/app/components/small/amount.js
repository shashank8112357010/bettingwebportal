import React from 'react'

const Amount = ({balance}) => {
    return (
        <div className="p-4 mt-8 rounded-lg text-center"
            style={{
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)",
                background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
            }}>
            <h4 className="text-white font-medium">Total Balance</h4>
            <p className="text-primaryYellow text-2xl">{balance}</p>
            <div className="flex justify-around mt-2">
                <button className="text-primaryYellow text-xs flex flex-col justify-center items-center gap-1">
                    <div className='flex justify-center items-center rounded-full w-[56px] h-[56px] border border-gray-800 ' style={{
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)",
                        background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
                    }}>
                        <img className='mt-2' src='/images/deposit.png' />
                    </div>
                    Deposit
                </button>
                <button className="text-primaryYellow text-xs flex flex-col justify-center items-center gap-1">
                    <div className='flex justify-center items-center rounded-full w-[56px] h-[56px] border border-gray-800  ' style={{
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)",
                        background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
                    }}>
                        <img className='mt-2' src='/images/reward.png' />
                    </div>
                    Rewards
                </button>
                <button className="text-primaryYellow text-xs flex flex-col justify-center items-center gap-1">
                    <div className='flex justify-center items-center rounded-full w-[56px] h-[56px] border border-gray-800 ' style={{
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)",
                        background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
                    }}>
                        <img className='mt-2' src='/images/withdraw.png' />
                    </div>
                    Withdraw
                </button>

            </div>
        </div>
    )
}

export default Amount