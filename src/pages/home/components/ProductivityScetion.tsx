import React from 'react';

const ProductivitySection: React.FC = () => {
  return (
    <section className='bg-[#F5F5F5] lg:py-[8rem] md:py-[4rem] py-[2rem] flex items-center justify-center'>
        <section className='lg:flex items-center justify-center lg:gap-[15rem] lg:px-[2rem]'>
            <h1 className='lg:text-[38px] md:text-[32px] text-[24px] font-sans text-center font-semibold tracking-[1px]'><span className='text-[#EE009D]'>Our productivity</span> performance </h1>
            <section className='flex items-center justify-center gap-[2rem] lg:mt-0 md:mt-[2rem] mt-[2.5rem]'>
                <div className='text-center'>
                    <h6 className='text-[14px] text-[#646A73] font-sans font-normal'>Jobs</h6>
                    <h1 className='text-[#000000] font-sans font-bold lg:text-[38px] md:text-[28px] text-[24px]'><span className='text-[#EE009D]  font-extrabold'>+</span>150K</h1>
                </div>
                <div className="border-[1px] h-[50px] border-[#EE009D] opacity-[0.5]"/>
                <div className='text-center'>
                    <h6 className='text-[14px] text-[#646A73] font-sans font-normal'>Start Ups</h6>
                    <h1 className='text-[#000000] font-sans font-bold lg:text-[38px] md:text-[28px] text-[24px]'><span className='text-[#EE009D]  font-extrabold'>+</span>10K</h1>
                </div>
                <div className="border-[1px] h-[50px] border-[#EE009D] opacity-[0.5]"/>
                <div className='text-center'>
                    <h6 className='text-[14px] text-[#646A73] font-sans font-normal'>Recruitment</h6>
                    <h1 className='text-[#000000] font-sans font-bold lg:text-[38px] md:text-[28px] text-[24px]'><span className='text-[#EE009D]  font-extrabold'>+</span>345K</h1>
                </div>

            </section>
        </section>
    </section>
  );
};

export default ProductivitySection;
