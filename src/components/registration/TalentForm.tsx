import React, { useState } from 'react';
import axios from 'axios';
import Images from '../constant/Images';

const TalentForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/register', {
        firstName,
        lastName,
        companyName,
        companySize,
      });
      console.log('Account created:', response.data);
    } catch (err) {
      setError('An error occurred during registration.');
      console.error(err);
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md xl:max-w-[1300px] lg:max-w-[900px] mx-auto p-8 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="text-2xl font-sans font-bold text-center mb-6">
            Hire top talent today with <span className="text-[#ee009d]"> WeWorkPerHour!</span>
            </h2>
          </div>
          <h1 className="text-[20px] font-sans font-semibold text-center mb-6">Unlock a 95% reduction in hiring time, cost, and effort with <span className='text-[#ee009d]'>WeWorkPerHour!</span></h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-2 py-2 mt-2 border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#2aa100]"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-2 py-2 mt-2 border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#2aa100]"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full px-2 py-2 mt-2 border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#2aa100]"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">Company Size</label>
                <select
                  id="companySize"
                  className="w-full px-2 py-2 mt-2 border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#2aa100]"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  required
                >
                  <option value="1-200">1-200</option>
                  <option value="201-999">201-999</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-[#ee009d] rounded-md hover:bg-[#2AA100] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Book a demo
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          <img src={Images.LoginImage} alt="register" className="w-full rounded-[10px]" />
        </div>
      </div>
    </section>
  );
};

export default TalentForm;
