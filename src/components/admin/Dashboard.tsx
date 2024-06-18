import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-[4rem] lg:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">Total Jobs</h2>
        <p className="text-2xl">120</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">Applicants</h2>
        <p className="text-2xl">50</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">Active Jobs</h2>
        <p className="text-2xl">75</p>
      </div>
    </div>
  );
}

export default Dashboard;