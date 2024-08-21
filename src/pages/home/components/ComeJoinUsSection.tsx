import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ComeJoinUsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    // Add your logic to send the email here
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
      transition={{ duration: 2}}
      className="xl:max-w-[1200px] lg:max-w-[1200px] md:max-w-[900px] lg:w-full md:w-[750px] lg:mx-auto mx-[2rem] bg-[#f5f5f5] rounded-[5px]"
    >
      <section className="lg:flex md:flex gap-[4rem] justify-center items-center p-[2.5rem]">
        <div>
          <h2 className="lg:text-[38px] md:text-[24px] text-[20px] mt-[1rem] font-sans font-semibold tracking-[1px]">
            Come join us and don't miss our latest{" "}
            <span className="text-[#ee009d]">job vacancies</span>
          </h2>
        </div>
        <div>
          <p className="lg:text-[14px] md:text-[14px] text-[10px] text-[#646A73] font-sans font-normal mt-[0.5rem]">
            By joining us, you have made a wise decision in making your job search more transparent, easier, and faster
          </p>
          <form onSubmit={handleSubmit} className="relative mt-[1rem]">
            <div className="relative overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="lg:w-[82%] md:w-[100%] lg:text-[16px] md:text-[12px] w-[100%] px-[1rem] py-[0.6rem] rounded-[5px] focus:outline-none bg-[#fff] shadow-m"
                required
              />
              <button
                type="submit"
                className="absolute inset-y-0 xl:right-[5.5rem] lg:right-[4.5rem] font-sans right-[0.5rem] bg-[#EE009D] text-[13px] text-white px-4 my-[8px] rounded-[5px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </motion.section>

  );
};

export default ComeJoinUsSection;
