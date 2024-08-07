import React from 'react'
import Header from '../../components/small/header'
import Footer from '../../components/small/footer'
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

const transactions = [
    { id: 1, type: 'Withdrawal', date: '02/01/2022', amount: -103 },
    { id: 2, type: 'Receive', date: '02/01/2022', amount: 457 },
    { id: 3, type: 'Withdrawal', date: '02/01/2022', amount: -45 },
    { id: 4, type: 'Receive', date: '02/01/2022', amount: 103 },
    { id: 5, type: 'Receive', date: '02/01/2022', amount: 1003 },
    { id: 6, type: 'Receive', date: '02/01/2022', amount: 1003 },
    { id: 7, type: 'Receive', date: '02/01/2022', amount: 1003 },
    { id: 8, type: 'Receive', date: '02/01/2022', amount: 1003 },
    { id: 9, type: 'Receive', date: '02/01/2022', amount: 1003 },
];

const Transactions = () => {
    return (
        <div className='flex flex-col items-center sm:shadow-lg'>
            <div className="container max-w-[420px] rounded-2xl relative min-h-screen"
            style={{ boxShadow: "0 4px 6px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(255, 255, 255, 0.5)" }}
            >
                {/* Header */}
                <Header />
                {/* Summary */}
                <div className='mx-10 mt-8'>
                    <div className="p-4 text-white rounded-2xl"
                        style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)", background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))" }}>
                        <div className="flex justify-between items-center">
                            <div className=" p-4 rounded-lg flex flex-col justify-center items-center gap-2">
                                <BsFileEarmarkArrowDown className='w-5 h-5 text-green-500' />
                                <span className="block text-sm text-white">Total Wining</span>
                                <span className="block text-lg text-green-500">₹2300</span>
                            </div>
                            <div className=" p-4 rounded-lg flex flex-col justify-center items-center gap-2">
                                <BsFileEarmarkArrowUp className='w-5 h-5 text-red-500' />
                                <span className="block text-sm text-white">Total Withdrawal</span>
                                <span className="block text-lg text-red-500">₹1650</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <div className="p-6 text-white max-w-md mx-auto flex-grow overflow-hidden">
                    <h3 className="mb-4 text-xl">Transactions</h3>
                    <ul className="md:max-h-[320px] max-h-[420px]  overflow-y-auto custom-scrollbar">
                        {transactions.map((transaction) => (
                            <li key={transaction.id} className="flex items-center py-2">
                                <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center"
                                    style={{
                                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)",
                                        background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))"
                                    }}>
                                    <img
                                        src="/images/rupee.png"
                                        alt="Rupee icon"
                                    />
                                </div>
                                <div className="flex-grow ml-4">
                                    <span className="block">{transaction.type}</span>
                                    <span className="text-primaryGray text-sm">{transaction.date}</span>
                                </div>
                                <div className={` mr-1 ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                    {transaction.amount < 0 ? `-₹${Math.abs(transaction.amount)}` : `+₹${transaction.amount}`}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default Transactions
