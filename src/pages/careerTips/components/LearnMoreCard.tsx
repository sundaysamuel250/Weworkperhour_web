import React from 'react'
import { FaCalendarDays } from 'react-icons/fa6';

interface LearnMoreCardProps {
    sliderImage: string;
    sliderTitle: string;
    sliderDescription: string;
    personImage: string;
    personName: string;
    lastUpdated: string;
}


const LearnMoreCard: React.FC <LearnMoreCardProps > = ({sliderImage, sliderTitle, sliderDescription, personImage, personName, lastUpdated}) => {
  return (
    <section className='flex items-center justify-center '>
         <section className=" relative px-[2rem] py-[2rem]">
            <div className="z-[-20] w-full h-auto ">
                <img src={sliderImage} alt="slider" className="w-full  object-cover rounded-[10px]" />
            </div>
           <section className="absolute top-[20%] left-[20%]">
                    <p className="text-xs text-gray-500 bg-[#fff] py-[0.5rem] flex items-center justify-center gap-[0.5rem]  rounded-[50px] sm:text-right w-[120px]"> <FaCalendarDays color='#ee009d' /> {lastUpdated}</p>
           </section>
           <section>
           </section>
        </section>
       </section>
  )
}

export default LearnMoreCard;