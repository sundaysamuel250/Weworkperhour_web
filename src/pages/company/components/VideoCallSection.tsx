import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../../../components/constant/Images'
import { FaJira } from 'react-icons/fa6'

const VideoCallSection: React.FC = () => {
  return (
    <section className='opacity-[0.9] lg:py-[10rem] py-[4rem]'>
    <section className='lg:flex flex flex-col-reverse sm:flex-row items-center justify-center gap-[4rem] lg:px-[4rem] md:px-[2.5rem] px-[2rem] '>
        <div className='lg:w-[50%]'>
        <p className='text-[#2AA100] flex justify-center text-center items-center gap-2 py-[0.5rem] px-[0.5rem] w-[100px] rounded-[5px] bg-[#D1FFBD]'><FaJira />Features</p>
            <h1 className='lg:text-[38px] md:text-[20px] text-[18px] mt-[1rem] font-sans font-semibold tracking-[1px]'>Recruitment using<br /> <span className='text-[#EE009D]'>video calls </span>in real time</h1>
            <p className='lg:text-[14px] md:text-[14px] text-[10px] text-[#646A73] font-sans font-normal lg:w-[65%] md:w-[75%] mt-[1rem]'>You can conduct recruitment through video calls in real-time, without having to meet face to face.</p>
           <div className='py-[1rem]'>
           <Link to="/">
              <button className="font-sans text-[14px] font-medium  text-[#FFFFFF]  bg-[#EE009D] hover:bg-[#2AA100] py-[6px] px-[10px] rounded-[5px] justify-center  ">Request Demo</button>
            </Link>
           </div>
        </div>
        <section className='lg:w-[50%] md:w-[90%]'>
            <img src={Images.VideoImage} alt="video" className='rounded-tr-[50px] rounded-bl-[50px]' />
        </section>
    </section>
   </section>
  )
}

export default VideoCallSection