import React from "react";
import Images from "../../../components/constant/Images";
import { Link } from "react-router-dom";

const JoinUsSection: React.FC = () => {

  return (
    <section className="xl:max-w-[1200px]  lg:max-w-[1200px] md:max-w-[900px] xl:w-full lg:w-[900px]  md:w-[700px] sm:mx-auto mx-[2rem]  bg-[#f5f5f5] rounded-[5px]">
      <section className="lg:flex md:flex gap-[4rem] justify-center items-center p-[2.5rem]">
       <div className="lg:w-[50%]"> 
        <img src={Images.JoinUsImage} alt="" className="w-[500px]" />
        </div>
        <div className="lg:w-[50%]">
        <h2 className="lg:text-[38px] md:text-[24px] text-[20px] mt-[1rem] font-sans font-semibold tracking-[1px]">
          Come join us and enjoy our 
          <span className="text-[#ee009d]">interesting features.</span>
        </h2>
        <div className='py-[1rem]'>
           <Link to="/">
              <button className="font-sans text-[14px] font-medium  text-[#FFFFFF]  bg-[#EE009D] hover:bg-[#2AA100] py-[6px] px-[10px] rounded-[5px] justify-center  ">Get Started</button>
            </Link>
           </div>
        </div>
      </section>
    </section>
  );
};

export default JoinUsSection;
