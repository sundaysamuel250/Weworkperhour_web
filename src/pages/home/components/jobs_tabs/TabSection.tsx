import React, { useState } from "react";
import RecentSection from "./RecentSection";
import DesignSection from "./DesignSection";
import DevelopmentSection from "./DevelopmentSection";
import FinanceSection from "./FinanceSection";
import ManagementSection from "./ManagementSection";
import ConsultingSection from "./ConsultingSection";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const TabSection: React.FC = () => {
  const [toggle, setToggle] = useState<number>(1);

  function updateToggle(id: number) {
    setToggle(id);
  }

  return (
    <section className="py-[4rem]">
      <section className="flex justify-center items-center">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[2rem]">
          {[1, 2, 3, 4, 5, 6].map((tabIndex) => (
            <li
              key={tabIndex}
              className={`list-none lg:text-[18px] md:text-[16px] text-[14px] ${
                toggle === tabIndex ? "text-[#EE009D]" : "text-[#646A73]"
              } cursor-pointer lg:hover:text-[18px] md:hover:text-[16px] hover:text-[14px] hover:text-[#EE009D] font-sans font-semibold tracking-[0.5px]`}
              onClick={() => updateToggle(tabIndex)}
            >
              {tabIndex === 1 && "All Recent"}
              {tabIndex === 2 && "Design"}
              {tabIndex === 3 && "Development"}
              {tabIndex === 4 && "Finance"}
              {tabIndex === 5 && "Management"}
              {tabIndex === 6 && "Consulting"}
            </li>
          ))}
        </div>
      </section>
      <section>
        <div className="relative max-w-[1000px] mx-auto mt-[1.5rem]">
          <div className="border-2 border-[#EE009D] opacity-[0.3]" />
          {toggle !== 7 && (
            <div
              className={`absolute inset-x-0 bottom-0 h-0 border-t-4 border-[#EE009D] w-[calc(100%/7)]`}
              style={{ left: `calc(${(toggle - 1) * (100 / 6)}%)` }}
            />
          )}
        </div>
        <div className={`${toggle === 1 ? "block" : "hidden"}`}>
          <RecentSection />
        </div>
        <div className={toggle === 2 ? "block" : "hidden"}>
          <DesignSection />
        </div>
        <div className={toggle === 3 ? "block" : "hidden"}>
          <DevelopmentSection />
        </div>
        <div className={toggle ===  4 ? "block" : "hidden"}>
          <FinanceSection />
        </div>
        <div className={toggle === 5 ? "block" : "hidden"}>
          <ManagementSection />
        </div>
        <div className={toggle === 6 ? "block" : "hidden"}>
          <ConsultingSection />
        </div>
      </section>
      <div className='pt-[1rem] text-center flex items-center justify-center '>
          <Link to="/">
            <button className="text-sm sm:text-base font-medium text-white bg-[#ee009d] flex items-center gap-4 justify-center hover:bg-green-600 py-2 px-4 sm:py-3 sm:px-6 rounded-lg">View All <FaArrowRightLong /></button>
          </Link>
        </div>
    </section>
  );
};

export default TabSection;
