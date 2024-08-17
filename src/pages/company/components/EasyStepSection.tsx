import React from 'react';
import { IoStatsChartSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Images from '../../../components/constant/Images';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const EasyStepSection: React.FC = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: stepsRef, inView: stepsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='py-[4rem] bg-[#f5f5f5] w-full'>
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className='text-center'
      >
        <div className='flex items-center justify-center'>
          <motion.p
            variants={fadeInVariants}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
            className='text-[#2AA100] flex justify-center text-center items-center gap-2 py-[0.5rem] px-[0.5rem] w-[100px] rounded-[5px] bg-[#D1FFBD]'
          >
            <IoStatsChartSharp />Started
          </motion.p>
        </div>
        <motion.h1
          variants={fadeInVariants}
          transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }}
          className='lg:text-[38px] md:text-[28px] text-[20px] mt-[0.5rem] font-sans font-semibold tracking-[1px]'
        >
          Easy Steps to get big, and more<br /> <span className='text-[#EE009D]'>great hires</span>
        </motion.h1>
        <motion.p
          variants={fadeInVariants}
          transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
          className='lg:text-[14px] md:text-[16px] text-[10px] text-[#646A73] font-sans font-normal mt-[0.5rem]'
        >
          An easy recruitment process can help your team in getting <br />talent candidates quickly too
        </motion.p>
      </motion.div>

      <motion.section
        ref={stepsRef}
        initial="hidden"
        animate={stepsInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className='py-8 sm:py-[8rem] px-[4rem]'
      >
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:gap-[4rem] gap-[4rem] md:gap-[4rem]'>
          <div className='text-center'>
            <div className='mx-auto max-w-[150px]'>
              <motion.img
                variants={fadeInVariants}
                transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
                src={Images.RegisterImage}
                alt="register"
                className='w-full h-auto object-cover'
              />
            </div>
            <motion.div
              variants={fadeInVariants}
              transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }}
              className='w-full'
            >
              <h1 className='text-lg md:text-xl lg:text-2xl mt-2 font-semibold tracking-wide'>Registration</h1>
              <p className='text-sm md:text-base text-gray-600 mt-1'>First, build your team by creating a new account on the Weworkperhour platform</p>
            </motion.div>
          </div>
          <div className='text-center'>
            <div className='mx-auto max-w-[150px]'>
              <motion.img
                variants={fadeInVariants}
                transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
                src={Images.ApplyImage}
                alt="apply"
                className='w-full h-auto object-cover'
              />
            </div>
            <motion.div
              variants={fadeInVariants}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
              className='w-full'
            >
              <h1 className='text-lg md:text-xl lg:text-2xl mt-2 font-semibold tracking-wide'>Create Profile</h1>
              <p className='text-sm md:text-base text-gray-600 mt-1'>Second, Make announcements explaining your work and about your brand.</p>
            </motion.div>
          </div>
          <div className='text-center'>
            <div className='mx-auto max-w-[150px]'>
              <motion.img
                variants={fadeInVariants}
                transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
                src={Images.InterviewImage}
                alt="interview"
                className='w-full h-auto object-cover'
              />
            </div>
            <motion.div
              variants={fadeInVariants}
              transition={{ duration: 1.5, delay: 1.2, ease: 'easeInOut' }}
              className='w-full'
            >
              <h1 className='text-lg md:text-xl lg:text-2xl mt-2 font-semibold tracking-wide'>Candidate selection</h1>
              <p className='text-sm md:text-base text-gray-600 mt-1'>Screen potential talent with our unique algorithm and find the best choice for your team.</p>
            </motion.div>
          </div>
          <div className='text-center'>
            <div className='mx-auto max-w-[150px]'>
              <motion.img
                variants={fadeInVariants}
                transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
                src={Images.CongratulationImage}
                alt="congratulation"
                className='w-full h-auto object-cover'
              />
            </div>
            <motion.div
              variants={fadeInVariants}
              transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
              className='w-full'
            >
              <h1 className='text-lg md:text-xl lg:text-2xl mt-2 font-semibold tracking-wide'>Congratulations</h1>
              <p className='text-sm md:text-base text-gray-600 mt-1'>You have completed step by step, time to welcome your new team member.</p>
            </motion.div>
          </div>
        </div>
        <div className='pt-[4rem] text-center flex items-center justify-center'>
          <Link to="/">
            <motion.button
              variants={fadeInVariants}
              transition={{ duration: 1.5, delay: 1.8, ease: 'easeInOut' }}
              className="text-sm sm:text-base font-medium text-white bg-[#ee009d] flex items-center gap-4 justify-center hover:bg-green-600 py-2 px-4 sm:py-3 sm:px-6 rounded-lg"
            >
              Get Started <FaArrowRightLong />
            </motion.button>
          </Link>
        </div>
      </motion.section>
      </section>
  );

};

export default EasyStepSection;

;
