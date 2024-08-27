import React, { useState } from 'react';
import TransactionHistory from './components/TransactionHistory';
import AddFundsModal from './components/AddFundModal';

import axios from 'axios';
import WithdrawFundsModal from './components/WithDrawFundsModal';
import EmployersWalletCard from './components/WalletCard';

const EmployersWallet: React.FC = () => {
  const [isAddFundsOpen, setAddFundsOpen] = useState(false);
  const [isWithdrawOpen, setWithdrawOpen] = useState(false);

  const openAddFundsModal = () => setAddFundsOpen(true);
  const closeAddFundsModal = () => setAddFundsOpen(false);

  const openWithdrawModal = () => setWithdrawOpen(true);
  const closeWithdrawModal = () => setWithdrawOpen(false);

  const handleWithdraw = async (amount: number, bankCode: string, accountNumber: string, recipientName: string) => {
    try {
      const response = await axios.post('/withdraw', {
        amount,
        bank_code: bankCode,
        account_number: accountNumber,
        recipient_name: recipientName,
      });

      console.log('Withdrawal successful:', response.data);
      closeWithdrawModal();
    } catch (error) {
      console.error('Error withdrawing funds:', error);
      alert('There was an issue processing your withdrawal. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Wallet</h1>
      <EmployersWalletCard 
        onAddFundsClick={openAddFundsModal}
        onWithdrawClick={openWithdrawModal}
      />
      <TransactionHistory />
      {isAddFundsOpen && <AddFundsModal onClose={closeAddFundsModal} />}
      {isWithdrawOpen && <WithdrawFundsModal onWithdraw={handleWithdraw} onClose={closeWithdrawModal} />}
    </div>
  );
};

export default EmployersWallet;
