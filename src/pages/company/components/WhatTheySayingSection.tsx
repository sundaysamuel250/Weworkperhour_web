import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong, FaComments } from 'react-icons/fa6'
import ImageCardSliderSection from '../ImageCardSliderSection'


const WhatTheySayingSection: React.FC = () => {
  return (
    <section className='opacity-[0.9] lg:py-[10rem] py-[4rem]'>
    <section className='lg:flex flex flex-col sm:flex-row items-center justify-center gap-[4rem] lg:px-[4rem] md:px-[2.5rem] px-[2rem] '>
        <div className='lg:w-[50%]'>
        <p className='text-[#2AA100] flex justify-center text-center items-center gap-2 py-[0.5rem] px-[0.5rem] w-[150px] rounded-[5px] bg-[#D1FFBD]'><FaComments />Testimonials</p>
            <h1 className='lg:text-[38px] md:text-[20px] text-[20px] mt-[1rem] font-sans font-semibold tracking-[1px]'>What are they <span className='text-[#EE009D]'> saying?</span></h1>
            <p className='lg:text-[14px] md:text-[14px] text-[10px] text-[#646A73] font-sans font-normal lg:w-[65%] md:w-[90%] mt-[1rem]'>By joining us , you will enjoy the full facilities that we have provided, as for testimonials from Weworkperhour members.</p>
           <div className='py-[1rem]'>
           <Link to="/">
              <button className="font-sans text-[14px] flex gap-4 items-center justify-center font-medium  text-[#FFFFFF]  bg-[#EE009D] hover:bg-[#2AA100] py-[6px] px-[10px] rounded-[5px] justify-center  ">View All<FaArrowRightLong /></button>
            </Link>
           </div>
        </div>
        <section className='lg:w-[50%] md:w-[50%] w-[100%]'>
           <ImageCardSliderSection />
        </section>
    </section>
   </section>
  )
}

export default WhatTheySayingSection