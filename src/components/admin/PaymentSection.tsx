import React from 'react';

interface Payment {
  id: number;
  userId: number;
  amount: number;
  date: string;
}

const payments: Payment[] = [
  { id: 1, userId: 1, amount: 100, date: '2024-01-01' },
  { id: 2, userId: 2, amount: 200, date: '2024-02-01' },
];

const PaymentSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payments</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">User ID</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td className="py-2 px-4 border-b">{payment.id}</td>
              <td className="py-2 px-4 border-b">{payment.userId}</td>
              <td className="py-2 px-4 border-b">{payment.amount}</td>
              <td className="py-2 px-4 border-b">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentSection;
