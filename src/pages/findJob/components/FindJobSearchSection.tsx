import React, { useState } from 'react';
import Dropdown from '../../../components/reusable/DropDownButton';

const FindJobSearchSection: React.FC = () => {
  const [jobQuery, setJobQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('Full-time');
  

  const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobQuery(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(e.target.value);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

 

  const handleSearch = () => {
    // Here you can perform the search based on jobQuery, locationQuery, and selectedOption
    console.log('Searching for job:', jobQuery, 'in location:', locationQuery, 'with option:', selectedOption);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="lg:flex md:flex  justify-center items-center w-full lg:mx-[2rem] mx-[2rem] py-[2rem] lg:space-y-0 md:space-y-0 space-y-[1rem] ">
        <div className="w-[100%]">
          <input
            type="text"
            placeholder="Enter job title"
            value={jobQuery}
            onChange={handleJobChange}
            className="w-[100%] p-4 rounded-[px] focus:outline-none bg-[#fff] shadow-m"
          />
        </div>
        <div className="w-[100%]">
          <input
            type="text"
            placeholder="Enter location"
            value={locationQuery}
            onChange={handleLocationChange}
            className="w-[100%] p-4 rounded-[px] focus:outline-none bg-[#fff] shadow-md focus:border-none"
          />
        </div>
        <div className="w-[100%]">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="w-[100%] p-4 rounded-[px] focus:outline-none bg-[#fff] shadow-md text-[#646A73] text-[16px]"
          >
            <option className='text-[#646A73] text-[14px]' value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>
      <div className='flex gap-2'>
      <button
          onClick={handleSearch}
          className="bg-[#EE009D] text-white lg:px-[2rem] md:px-[2rem] px-[2rem] lg:py-[0.8rem] md:py-[0.8rem] py-[0.5rem] lg:text-[18px] md:text-[18px] text-[12px] rounded-md hover:bg-[#2AA100] hover:tracking-[1px] focus:outline-none ease-in duration-300 "
        >
          Search
        </button>
        <Dropdown />
      </div>
      </div>
    </div>
  );
};

export default FindJobSearchSection;

