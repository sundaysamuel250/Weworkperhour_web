import React from 'react';
import CandidateDetails from './components/CandidateDetails';
import PersonalProfile from './components/PersonalProfile';
import { UilAngleRight } from '@iconscout/react-unicons';

const CandidateProfile = () => {
  return (
    <section>
      <header className="flex items-center justify-center bg-[#f5f5f5] py-[4rem] md:py-[8rem] mb-6">
        <div className="text-center px-4">
          <h1 className="text-[#2aa100] text-[28px] md:text-[38px] font-sans font-bold mb-4 md:mb-8">Candidate Profile</h1>
          <nav>
            <ul className="flex justify-center space-x-2 md:space-x-4">
              <li className="cursor-pointer flex gap-1 md:gap-2 text-[#2aa100]">
                Home <UilAngleRight />
              </li>
              <li className="cursor-pointer text-[#646A73]">Candidate Profile</li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-[4rem] max-w-[95%] md:max-w-[1300px] mx-auto px-4">
        <CandidateDetails />
        <PersonalProfile  />
      </div>
    </section>
  );
}

export default CandidateProfile;
