import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const JobSearch: React.FC = () => {
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
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
      transition={{ duration: 3 }}
      className="flex justify-center items-center"
    >
      <div className="lg:flex md:flex justify-center items-center w-full lg:mx-[8rem] mx-[2rem] py-[2rem] lg:space-y-0 md:space-y-0 space-y-[1rem] ">
        <div className="w-[100%]">
          <input
            type="text"
            placeholder="Enter job title"
            value={jobQuery}
            onChange={handleJobChange}
            className="w-[100%] p-4 rounded-[3px] focus:outline-none bg-[#fff] shadow-m"
          />
        </div>
        <div className="w-[100%]">
          <input
            type="text"
            placeholder="Enter location"
            value={locationQuery}
            onChange={handleLocationChange}
            className="w-[100%] p-4 rounded-[3px] focus:outline-none bg-[#fff] shadow-md focus:border-none"
          />
        </div>
        <div className="w-[60%]">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="w-[100%] p-4 rounded-[3px] focus:outline-none bg-[#fff] shadow-md text-[#646A73] text-[16px]"
          >
            <option className='text-[#646A73] text-[14px]' value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <button
          onClick={handleSearch}
          className="bg-[#EE009D] text-white lg:px-[2rem] md:px-[2rem] px-[2rem] lg:py-[0.8rem] md:py-[0.8rem] py-[0.5rem] lg:text-[18px] md:text-[18px] text-[12px] rounded-md hover:bg-[#2AA100] hover:tracking-[1px] focus:outline-none focus:ring focus:border-blue-300"
        >
          Search
        </button>
      </div>
    </motion.div>
  );
};

export default JobSearch;
