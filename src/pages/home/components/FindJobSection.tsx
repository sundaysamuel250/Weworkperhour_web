import React from 'react';
import Images from '../../../components/constant/Images';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FindJobSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className='opacity-[0.9] py-[4rem]'>
      <section className='lg:flex items-center justify-center gap-[4rem] lg:px-[4rem] md:px-[2.5rem] px-[2rem]' ref={ref}>
        <motion.div
          className='lg:w-[50%]'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <p className='bg-[#D1FFBD] opacity-[0.9] rounded-[5px] text-[#2AA100] py-[0.5rem] text-center lg:w-[60%]'>
            #Find a Job that suits your interest and skill
          </p>
          <h1 className='lg:text-[38px] md:text-[28px] text-[20px] mt-[1rem] font-sans font-semibold tracking-[1px]'>
            Discover the Perfect Job Match for <span className='text-[#EE009D]'>Your Passion</span> and Expertise!
          </h1>
          <p className='lg:text-[14px] md:text-[14px] text-[10px] text-[#646A73] font-sans font-normal mt-[1rem]'>
            Explore thousands of job opportunities with all the information you<br /> need and manage all your job applications from start to finish.
          </p>
          <div className='py-[1rem]'>
            <Link to="/find-job">
              <button className="font-sans text-[14px] font-medium text-[#FFFFFF] bg-[#EE009D] hover:bg-[#2AA100] py-[6px] px-[10px] rounded-[5px] justify-center">
                Find job
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='lg:w-[50%]'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <img src={Images.PerfectMatchImage} alt="Perfect Match" />
        </motion.div>
      </section>
    </section>
  );
};
export default FindJobSection;
