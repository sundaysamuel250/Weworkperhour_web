import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../../components/constant/Images'

const HeroSection: React.FC = () => {
  return (
    <section className='opacity-[0.9] py-[8rem]'>
    <section className='lg:flex flex flex-col-reverse sm:flex-row items-center justify-center gap-[4rem] lg:px-[4rem] md:px-[2.5rem] px-[2rem] '>
        <div className='lg:w-[50%]'>
            <p className='bg-[#D1FFBD] opacity-[0.9] rounded-[5px] text-[#2AA100] py-[0.5rem] px-[] text-center lg:w-[55%]'>#The world's leading job search platform</p>
            <h1 className='lg:text-[38px] md:text-[28px] text-[20px] mt-[1rem] font-sans font-semibold tracking-[1px]'>The best platform to <span className='text-[#EE009D]'>recruit talented</span> hiring  for your company</h1>
            <p className='lg:text-[14px] md:text-[14px] text-[10px] text-[#646A73] font-sans font-normal mt-[1rem]'>Explore thousand of job opportunities with all the information you<br/> need and manage all your job application from start to finish.</p>
           <div className='py-[1rem]'>
           <Link to="/">
              <button className="font-sans text-[14px] font-medium  text-[#FFFFFF]  bg-[#EE009D] hover:bg-[#2AA100] py-[6px] px-[10px] rounded-[5px] justify-center  ">Request Demo</button>
            </Link>
           </div>
        </div>
        <section className='lg:w-[50%]'>
            <img src={Images.RecruitImage} alt="" />
        </section>
    </section>
   </section>
  )
}

export default HeroSection