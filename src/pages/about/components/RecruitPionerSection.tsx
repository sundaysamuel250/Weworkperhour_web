import React from "react";
import { FaTrophy, FaUser, FaUsers } from "react-icons/fa6";
import PioneerCardSection from "./PioneerCardSection";
import Images from "../../../components/constant/Images";

const jobData = [
  {
    personImage: <FaUser color="#ee009d" size={20} />,
    sliderImage: Images.CareerCardImageFour,
    sliderTitle: "For job seekers",
    sliderDescription:
      "Weworkperhour is committed to providing a fun and transparent experience for finding work with a focus on their ethos, skills and aspirations. If you desire to work remotely as a full-time staff or a freelancer then we are your number one plug.",
    buttonName: "View All",
    link: "/find-job",
  },
  {
    personImage: <FaUsers color="#ee009d" size={20} />,
    sliderImage: Images.CareerCardImageFive,
    sliderTitle: "For Companies",
    sliderDescription: "If you are looking for a smart way to recruit a freelancer to assist you with that project or a full-time remote talent to join your team, then Weworkperhour is your go-to. At Weworkperhour we make recruitment seamless by matching quality candidates with companies at the snap of a finger.",
    buttonName: "View All",
    link: "/hire-talent",
  },
];

const RecruitPioneerSection: React.FC = () => {
  return (
    <section>
      <div className="text-center">
        <div className="flex items-center justify-center">
          <p className="text-[#2AA100] flex justify-center text-center items-center gap-2 py-[0.5rem] px-[0.5rem] w-[250px] rounded-[5px] bg-[#D1FFBD]">
            <FaTrophy /> Goals want to achieve
          </p>
        </div>
        <h1 className="lg:text-[38px] md:text-[28px] text-[20px] mt-[0.5rem] font-sans font-semibold tracking-[1px]">
          Become the best
          <br />
          Recruitment <span className="text-[#EE009D]">pioneer</span>
        </h1>
      </div>
      <section className="py-[2rem] max-w-[1400px] mx-auto">
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:items-center justify-center gap-[1rem] space-y-[2rem] sm:space-y-0 py-[4rem]">
            {jobData.map((job, index) => (
              <PioneerCardSection
                key={index}
                personImage={job.personImage}
                sliderDescription={job.sliderDescription}
                sliderImage={job.sliderImage}
                sliderTitle={job.sliderTitle}
                buttonName={job.buttonName}
                link={job.link}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default RecruitPioneerSection;
