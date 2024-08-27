import React from 'react';

const WalletCard: React.FC = () => {
  const publicKey = 'pk_test_8f31522a6130568a751f67e690000ec9d9b8738a'; // Replace with your Paystack public key
  const amount = 125000; // Amount in kobo (1250.00 NGN * 100)
  const email = 'orinamesunday360@gmail.com'; // Replace with the user's email

  const handlePaystackPayment = () => {
    const handler = (window as any).PaystackPop.setup({
      key: publicKey,
      email,
      amount,
      currency: 'NGN', // Adjust the currency if necessary
      callback: (response: any) => {
        console.log('Payment successful:', response);
        // Handle successful payment here, such as updating the user's wallet balance
      },
      onClose: () => {
        console.log('Payment window closed');
        // Handle the case where the payment window is closed without completing the transaction
      },
    });
    handler.openIframe();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Available Balance</h2>
      <p className="text-3xl font-bold text-green-500">$1,250.00</p>
      <button
        onClick={handlePaystackPayment}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Funds
      </button>
    </div>
  );
};

export default WalletCard;

