import React from 'react';
import { UilEnvelope } from '@iconscout/react-unicons';
import Images from '../../../constant/Images';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const PersonalProfile: React.FC = () => {
  return (
    <div className="py-[2rem] md:py-[4rem] mt-[2rem] md:mt-[4rem] bg-white w-full md:w-[600px] lg:w-[800px] xl:w-[1000px] h-auto md:h-[800px] rounded-lg shadow-lg text-gray-800">
      <div className="flex flex-col items-start w-[90%] mx-auto">
        {/* Avatar */}
        <div className="flex items-center justify-center w-full mb-4">
          <img src={Images.ProfileLogoTwo} alt="personal-profile" className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover rounded-full" />
        </div>

        {/* Name */}
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <h1 className="text-xl md:text-2xl text-center font-bold">James Brower</h1>
        </div>

        {/* Location */}
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <p className="text-[#2AA100] text-[14px] md:text-[16px] font-sans font-semibold tracking-[0.4px]">Location:</p>
          <p className="text-[#646A73] text-[12px] md:text-[14px] font-sans font-normal">Spain, Barcelona</p>
        </div>

        {/* Email */}
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <p className="text-[#2AA100] text-[14px] md:text-[16px] font-sans font-semibold tracking-[0.4px]">Email:</p>
          <p className="flex items-center text-[12px] md:text-[14px]"><UilEnvelope className="mr-2" />me@support.com</p>
        </div>

        {/* Qualification */}
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <p className="text-[#2AA100] text-[14px] md:text-[16px] font-sans font-semibold tracking-[0.4px]">Qualification:</p>
          <p className="text-[#646A73] text-[12px] md:text-[14px] font-sans font-normal">Master Degree</p>
        </div>

        {/* Gender */}
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <p className="text-[#2AA100] text-[14px] md:text-[16px] font-sans font-semibold tracking-[0.4px]">Gender:</p>
          <p className="text-[#646A73] text-[12px] md:text-[14px] font-sans font-normal">Male</p>
        </div>

        {/* Expected Salary */}
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <p className="text-[#2AA100] text-[14px] md:text-[16px] font-sans font-semibold tracking-[0.4px]">Expected Salary:</p>
          <p className="text-[#646A73] text-[12px] md:text-[14px] font-sans font-normal">$3k-$4k/month</p>
        </div>

        {/* Social media */}
        <div className="w-full border-b border-gray-300 pb-4 mb-4">
          <p className="text-[#2AA100] text-[14px] md:text-[16px] font-sans font-semibold tracking-[0.4px]">Social:</p>
          <div className="flex mt-4 space-x-4">
            <FaFacebook className="w-4 h-4 rounded-full" color="#2aa100" />
            <FaLinkedin className="w-4 h-4 rounded-full" color="#2aa100" />
            <FaInstagram className="w-4 h-4 rounded-full" color="#2aa100" />
            <FaXTwitter className="w-4 h-4 rounded-full" color="#2aa100" />
          </div>
        </div>

        {/* Resume */}
        <div className="w-full">
          <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
