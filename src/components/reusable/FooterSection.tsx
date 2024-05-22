import React from 'react';
import Images from '../constant/Images';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';

export default function FooterSection() {
  return (
    <section className='bg-[#ffffff]'>
      <div className='lg:flex justify-center lg:px-[1rem] md:px-4 py-[8rem] xl:gap-[4rem] lg:gap-[2rem] space-y-[2rem]'>
        <div className='w-full md:w-1/2 lg:w-[50%] lg:px-0 px-[2rem] '>
          <Link to="/" className="logo">
            <img src={Images.Logo} alt="logo" className="w-32 md:w-40 h-auto" />
          </Link>
          <p className='text-sm md:text-base lg:w-[50%] py-[2rem] text-gray-600'>
            Explore thousands of job opportunities with all the information you need, and manage all your job applications from start to finish.
          </p>
          <div className="flex mt-4 space-x-4">
            <FaFacebook className="w-8 h-8 rounded-full" color="#2aa100" />
            <FaLinkedin className="w-8 h-8 rounded-full" color="#2aa100" />
            <FaInstagram className="w-8 h-8 rounded-full" color="#2aa100" />
            <FaXTwitter className="w-8 h-8 rounded-full" color="#2aa100" />
          </div>
        </div>
        <div className='border-[1px] lg:hidden block border-[#2aa100] w-[100%]'/>
        <div className='w-full md:w-1/8 lg:w-auto lg:px-0 px-[2rem]'>
          <h2 className='text-black text-base md:text-lg font-semibold mb-4'>Company</h2>
          <ul className='text-sm'>
            <li><Link to="/" className='text-gray-600'>Testimonial</Link></li>
            <li className='py-[1rem]'><Link to="/" className='text-gray-600'>For Jobseeker</Link></li>
            <li><Link to="/" className='text-gray-600'>For Company</Link></li>
          </ul>
        </div>
        <div className='border-[1px] lg:hidden block border-[#2aa100] w-[100%]'/>
        <div className='w-full md:w-1/2 lg:w-auto lg:px-0 px-[2rem]'>
          <h2 className='text-black text-base md:text-lg font-semibold mb-4'>Product</h2>
          <ul className='text-sm'>
            <li><Link to="/" className='text-gray-600'>Career Tips</Link></li>
            <li className='py-[1rem]'><Link to="/" className='text-gray-600'>Trending Job</Link></li>
            <li><Link to="/" className='text-gray-600'>Bonafide Company</Link></li>
          </ul>
        </div>
        <div className='border-[1px] lg:hidden block border-[#2aa100] w-[100%]'/>
        <div className='w-full md:w-1/4 lg:w-auto lg:px-0 px-[2rem]'>
          <h2 className='text-black text-base md:text-lg font-semibold mb-4'>Resources</h2>
          <ul className='text-sm'>
            <li><Link to="/" className='text-gray-600'>FAQ</Link></li>
            <li className='py-[1rem]'><Link to="/" className='text-gray-600'>About Us</Link></li>
            <li><Link to="/" className='text-gray-600'>Call Center</Link></li>
          </ul>
        </div>
      </div>
      <div className='xl:max-w-[1200px] lg:max-w-[900px] mx-auto border-[1px] border-[#2AA100] mt-[-4rem]'/>
      <section className='flex lg:flex-row xl:flex-row flex-col-reverse md:flex justify-center xl:gap-[20rem] lg:gap-[4rem] py-[4rem] lg:px-0 px-[2rem]'>
        <p className='text-sm md:text-base sm:mb-0 lg:mt-0 xl:mt-0  mt-[2rem] text-gray-600'>@Copyright WWPH 2022. All rights reserved.</p>
        <div className='lg:flex xl:gap-[4rem] lg:gap-[2rem] justify-center lg:space-y-0  space-y-[2rem]'> 
        <h2 className='text-black text-[14px] md:text-lg font-semibold'>Privacy Policy</h2>
        <h2 className='text-black text-base md:text-lg font-semibold'>Terms & Conditions</h2>
        <h2 className='text-black text-base md:text-lg font-semibold'>Cookies Policy</h2>
        </div>
      </section>
    </section>
  );
}
