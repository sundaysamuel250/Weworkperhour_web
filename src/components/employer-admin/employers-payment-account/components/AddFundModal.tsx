import React, { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { paystackConfig } from "../../../../utils/PaystackConfig";

interface AddFundsModalProps {
  onClose: () => void;
}

const AddFundsModal: React.FC<AddFundsModalProps> = ({ onClose }) => {
  const [amount, setAmount] = useState(0);

  const handlePaystackSuccessAction = (reference: any) => {
    console.log(reference);
    onClose();
  };

  const handlePaystackCloseAction = () => {
    console.log('closed');
  };

  const initializePayment = usePaystackPayment({
    ...paystackConfig,
    amount: amount * 100,  // Convert to kobo
    email: 'user@example.com',  // Replace with the user's email
  });

  const handlePayment = () => {
    initializePayment(handlePaystackSuccessAction, handlePaystackCloseAction);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add Funds</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="Enter amount"
          className="w-full border rounded-lg p-2 mb-4"
        />
        <button
          onClick={handlePayment}
          className="bg-[#2AA100] text-[14px] font-sans font-medium tracking-[0.5px] text-white py-2 px-4 rounded hover:bg-blue-600 w-full mb-2"
        >
          Add Funds
        </button>
        <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddFundsModal;
