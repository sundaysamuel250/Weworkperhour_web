import React, { useState } from 'react';

const JobSearch: React.FC = () => {
  const [jobQuery, setJobQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobQuery(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(e.target.value);
  };

  const handleSearch = () => {
    // Here you can perform the search based on jobQuery and locationQuery
    console.log('Searching for job:', jobQuery, 'in location:', locationQuery);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="lg:flex md:flex gap-[2rem] justify-center items-center w-full lg:mx-[8rem] mx-[2rem] py-[2rem] lg:space-y-0 md:space-y-0 space-y-[1rem] ">
       
        <div className=" w-[100%] ">
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
            className="w-[100%] p-4  rounded-[px] focus:outline-none bg-[#fff] shadow-md focus:border-none "
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-[#EE009D] text-white lg:px-[2rem] md:px-[2rem] px-[2rem]  lg:py-[0.8rem] md:py-[0.8rem] py-[0.5rem] lg:text-[18px] md:text-[18px] text-[12px] rounded-md hover:bg-[#2AA100] hover:tracking-[1px] focus:outline-none focus:ring focus:border-blue-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default JobSearch;
