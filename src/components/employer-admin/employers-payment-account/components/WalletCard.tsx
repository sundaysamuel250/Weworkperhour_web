import React from 'react';

interface EmployersWalletCardProps {
  onAddFundsClick: () => void;
  onWithdrawClick: () => void;
}

const EmployersWalletCard: React.FC<EmployersWalletCardProps> = ({ onAddFundsClick, onWithdrawClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Available Balance</h2>
      <p className="text-3xl font-bold text-green-500">$1,250.00</p>
      <div className="mt-4">
        <button onClick={onAddFundsClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4">
          Add Funds
        </button>
        <button onClick={onWithdrawClick} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Withdraw Funds
        </button>
      </div>
    </div>
  );
};

export default EmployersWalletCard;
