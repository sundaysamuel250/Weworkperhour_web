import React from 'react';
import { iProfileCompany } from '../../../../models/profle';

interface EmployersWalletCardProps {
  onAddFundsClick: () => void;
  onWithdrawClick: () => void;
  profile : iProfileCompany
}

const EmployersWalletCard: React.FC<EmployersWalletCardProps> = ({ onAddFundsClick, onWithdrawClick, profile }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Available Balance</h2>
      <p className="text-3xl font-bold text-green-500">N{profile.wallet}</p>
      <div className="mt-4">
        <button onClick={onAddFundsClick} className="bg-[#2AA100] text-white py-2 px-4 rounded-[5px] mr-4 hover:bg-[#2AA100] transform transition-transform duration-300 hover:scale-105">
          Add Funds
        </button>
        <button onClick={onWithdrawClick} className="text-white bg-[#ee009d] font-sans font-light text-[16px]  py-2 px-4 rounded-[5px] hover:bg-[#ee009d] transform transition-transform duration-300 hover:scale-105">
          Withdraw Funds
        </button>
      </div>
    </div>
  );
};

export default EmployersWalletCard;
