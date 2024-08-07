import React from 'react'
import Header from '../../components/small/header'
import Amount from '../../components/small/amount'
import Footer from '../../components/small/footer';

const transactions = [
    { id: 1, type: 'Withdrawal', date: '30/12/2021', amount: -300 },
    { id: 2, type: 'Withdrawal', date: '30/12/2021', amount: -300 },
    { id: 3, type: 'Top Up Wallet', date: '02/01/2022', amount: 300 },
    { id: 4, type: 'Top Up Wallet', date: '02/01/2022', amount: 300 },
    { id: 5, type: 'Top Up Wallet', date: '02/01/2022', amount: 300 },
    { id: 6, type: 'Top Up Wallet', date: '02/01/2022', amount: 300 },
    { id: 7, type: 'Top Up Wallet', date: '02/01/2022', amount: 300 },
    { id: 8, type: 'Top Up Wallet', date: '02/01/2022', amount: 300 },
];

const Wallet = () => {
    const balance = 10000;
    return (
        <div className='flex flex-col items-center sm:shadow-lg'>
            <div className="container max-w-[420px] rounded-2xl relative min-h-screen"
            style={{ boxShadow: "0 4px 6px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(255, 255, 255, 0.5)" }}
            >
                {/* Header */}
                <Header />
                {/* Amount */}
                <div className='p-4'>
                    <Amount balance={balance} />
                </div>
                {/* History */}
                <div className="p-6 text-white max-w-md mx-auto flex-grow overflow-hidden">
                    <h3 className="mb-4 text-xl">History</h3>
                    <ul className="md:max-h-64 max-h-[350px] overflow-y-auto custom-scrollbar">
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
                                <div className={`mr-1 ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
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

export default Wallet;
