import React from 'react';
import { IoStatsChartSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Images from '../../../components/constant/Images';
import { Link } from 'react-router-dom';

const EasyStepSection: React.FC = () => {
  return (
    <section className='py-[4rem] bg-[#f5f5f5] w-full'>
      <div className='text-center'>
        <div className='flex items-center justify-center'> 
          <p className='text-[#2AA100] flex justify-center text-center items-center gap-2 py-[0.5rem] px-[0.5rem] w-[100px] rounded-[5px] bg-[#D1FFBD]'><IoStatsChartSharp />Started</p>
        </div>
        <h1 className='lg:text-[38px] md:text-[28px] text-[20px] mt-[0.5rem] font-sans font-semibold tracking-[1px]' >Easy Steps to get big, and more<br /> <span className='text-[#EE009D]' >great hires</span></h1>
        <p className='lg:text-[14px] md:text-[16px] text-[10px] text-[#646A73] font-sans font-normal mt-[0.5rem]'>An easy recruitment process can help your team in getting <br />talent candidates quickly too</p>
      </div>
      <section className='py-8 sm:py-[8rem] px-[4rem]'>
  <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:gap-[4rem] gap-[4rem] md:gap-[4rem]'>
    <div className='text-center'>
      <div className='mx-auto max-w-[150px]'>
        <img src={Images.RegisterImage} alt="register" className='w-full h-auto object-cover'/>
      </div>
      <div className='w-full'>
        <h1 className='text-lg md:text-xl lg:text-2xl mt-2 font-semibold tracking-wide'>Registration</h1>
        <p className='text-sm md:text-base text-gray-600 mt-1'>First, build your team by creating a new account on the Weworkperhour platform</p>
      </div>
    </div>
    <div className='text-center'>
      <div className='mx-auto max-w-[150px]'>
        <img src={Images.ApplyImage} alt="apply" className='w-full h-auto object-cover'/>
      </div>
      <div className='w-full'>
        <h1 className='text-lg md:text-xl lg:text-2xl mt-2 font-semibold tracking-wide'>Create Profile</h1>
        <p className='text-sm md:text-base text-gray-600 mt-1'>Second, Make  announcements explaining your work and about your brand.</p>
      </div>
    </div>
    <div className='text-center'>
      <div className='mx-auto max-w-[150px]'>
        <img src={Images.InterviewImage} alt="interview" className='w-full h-auto object-cover'/>
      </div>
      <div className='w-full'>
        <h1 className='text-lg md:text-xl lg:text-2xl mt-2 font-semibold tracking-wide'>Candidate selection</h1>
        <p className='text-sm md:text-base text-gray-600 mt-1'>Screen potential talent with our unique algorithm and find the best choice for your team.</p>
      </div>
    </div>
    <div className='text-center'>
      <div className='mx-auto max-w-[150px]'>
        <img src={Images.CongratulationImage} alt="congratulation" className='w-full h-auto object-cover'/>
      </div>
      <div className='w-full'>
        <h1 className='text-lg md:text-xl lg:text-2xl mt-2 font-semibold tracking-wide'>Congratulations</h1>
        <p className='text-sm md:text-base text-gray-600 mt-1'>You have completed step by step, time to welcome your new team member.</p>
      </div>
    </div>
  </div>
        <div className='pt-[4rem] text-center flex items-center justify-center '>
          <Link to="/">
            <button className="text-sm sm:text-base font-medium text-white bg-[#ee009d] flex items-center gap-4 justify-center hover:bg-green-600 py-2 px-4 sm:py-3 sm:px-6 rounded-lg">Get Started <FaArrowRightLong /></button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default EasyStepSection;
