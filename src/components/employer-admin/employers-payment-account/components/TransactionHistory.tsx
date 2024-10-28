import React, { useEffect, useState } from 'react';
import { httpGetWithToken } from '../../../../utils/http_utils';
import moment from 'moment';

// const transactions = [
//   { id: 1, date: '2024-08-01', amount: 150, description: 'Job Payment' },
//   { id: 2, date: '2024-07-28', amount: -50, description: 'Withdrawal' },
//   { id: 3, date: '2024-07-20', amount: 200, description: 'Job Payment' },
// ];

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<any>([]);
  const fetchTransactions = async () => {
    let res = await httpGetWithToken("employer/transaction")
    if(res.status == "success") {
      setTransactions(res.data)
    }
  }
  useEffect(()=> {
    fetchTransactions();
  }, [])
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Date</th>
            <th className="pb-2">Description</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction:any) => (
            <tr key={transaction.id} className="border-t">
              <td className="py-2">{moment(transaction.create_at).format("Do MMM, y")}</td>
              <td className="py-2">{"Fund wallet"}</td>
              <td className={`py-2 ${transaction.status == "pending" ? 'text-red-500' : 'text-green-500'}`}>
              ₦{Math.abs(transaction.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
