import React from 'react';

const WalletCard: React.FC = () => {
  const publicKey = 'pk_test_8f31522a6130568a751f67e690000ec9d9b8738a'; // Replace with your Paystack public key
  const email = 'orinamesunday360@gmail.com'; // Replace with the user's email

  const handlePaystackWithdrawal = () => {
    const handler = (window as any).PaystackPop.setup({
      key: publicKey,
      email,
      amount: 0, // Set the amount to 0 since this is a withdrawal
      currency: 'NGN',
      channels: ['bank'], // Restrict to bank transfer channel only
      callback: (response: any) => {
        console.log('Withdrawal request submitted:', response);
        // Handle the withdrawal submission, such as confirming the transaction
      },
      onClose: () => {
        console.log('Withdrawal process closed');
        // Handle the case where the withdrawal process is closed without completing the transaction
      },
    });
    handler.openIframe();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold font-sans mb-4">Available Balance</h2>
      <p className="text-3xl font-bold text-green-500 font-merri">₦500,000.00</p> {/* Updated to Naira */}
      <button
        onClick={handlePaystackWithdrawal}
        className="mt-4 bg-[#EE009D] text-white font-sans font-light text-[16px]  py-2 px-4 rounded-[5px] hover:bg-[#2AA100] transform transition-transform duration-300 hover:scale-105"
      >
        Withdraw Funds
      </button>
    </div>
  );
};

export default WalletCard;
