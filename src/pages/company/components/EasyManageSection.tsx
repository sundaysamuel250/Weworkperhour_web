import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../../components/constant/Images'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { FaArrowRightLong } from 'react-icons/fa6'


const EasyManageSection: React.FC = () => {
  return (
    <section className='opacity-[0.9] lg:py-[10rem] md:py-[4rem] py-[4rem]'>
    <section className='lg:flex flex flex-col sm:flex-row items-center justify-center gap-[4rem] lg:px-[4rem] md:px-[2.5rem] px-[2rem] '>
        <section className='lg:w-[50%] md:w-[90%]'>
            <img src={Images.EasilyImage} alt="" className='rounded-tr-[50px] rounded-bl-[50px]' />
        </section>
        <div className='lg:w-[50%]'>
        <p className='text-[#2AA100] flex justify-center text-center items-center gap-2 py-[0.5rem] px-[0.5rem] w-[100px] rounded-[5px] bg-[#D1FFBD]'><MdOutlineManageAccounts />Started</p>
            <h1 className='lg:text-[38px] md:text-[20px] text-[18px] mt-[1rem] font-sans font-semibold tracking-[1px]'><span className='text-[#EE009D]'>Easily manage</span>your team recruitment in real time.</h1>
            <p className='lg:text-[14px] md:text-[14px] text-[10px] text-[#646A73] font-sans font-normal mt-[1rem] lg:w-[65%] md:w-[75%]'>A platform that allows teams to find , and select talented talent who will be part of your team.</p>
            <div className='py-[1rem]'>
           <Link to="/">
              <button className="font-sans text-[10px]  sm:text-[14px] font-medium  text-[#FFFFFF]  bg-[#EE009D] hover:bg-[#2AA100] py-[8px] px-[10px] rounded-[5px] flex items-center justify-center gap-[0.5rem] ">Learn more  <FaArrowRightLong /></button>
            </Link>
           </div>
        </div>
    </section>
   </section>
  )
}

export default EasyManageSection