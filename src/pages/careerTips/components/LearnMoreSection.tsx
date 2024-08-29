import React from "react";
import Images from "../../../components/constant/Images";
import { BiChevronRight } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import LearnMoreCard from "./LearnMoreCard";
import FooterSection from "../../../components/reusable/FooterSection";
import ComeJoinUsSection from "../../home/components/ComeJoinUsSection";

const jobData = [
  {
    personImage: Images.SliderImageOne,
    sliderImage: Images.CareerCardImageFour,
    sliderTitle: "4 Pieces of the best career advice",
    sliderDescription:
      "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
    personName: "John Daniel",
    lastUpdated: "March 2024",
  },
  {
    personImage: Images.SliderImageOne,
    sliderImage: Images.CareerCardImageFive,
    sliderTitle: "4 Pieces of the best career advice",
    sliderDescription:
      "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
    personName: "Harrison Jean",
    lastUpdated: "April 2023",
  },
  {
    personImage: Images.SliderImageOne,
    sliderImage: Images.CareerCardImageSix,
    sliderTitle: "4 Pieces of the best career advice",
    sliderDescription:
      "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
    personName: "Marie Johnson",
    lastUpdated: "Jan 2024",
  },
];

const LearnMoreSection: React.FC = () => {
  return (
    <section>
      <div className="flex gap-[1.5rem] xl:ml-[8rem] lg:ml-[8rem] md:ml-[2rem] ml-[2rem] mt-[8rem]">
        <h2 className="flex gap-[2px] font-sans lg:text-[18px] md:text-[16px] sm:text-[12px] justify-center items-center text-[#2aa100]">
          Home <BiChevronRight size={25} />
        </h2>
        <h2 className="flex gap-[2px] font-sans lg:text-[18px] md:text-[16px] sm:text-[12px] justify-center items-center text-[#2aa100]">
          Career Tips <BiChevronRight size={25} />
        </h2>
        <h2 className="lg:text-[18px] md:text-[16px] sm:text-[12px] text-[#646A73]">
          Articles Career Tips
        </h2>
      </div>
      <section>
        <div className="xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto py-[2rem]">
          <img
            src={Images.CareerSliderImageOne}
            alt="slider"
            className="w-full h-[100%] rounded-md"
          />
        </div>
      </section>
      <section className="flex items-center justify-center xl:space-x-[50rem] lg:space-x-[28rem] md:space-x-[20rem] space-x-[2rem]">
        <div className="flex items-center gap-4 bg-[#fff] w-[220px] sm:w-[250px] rounded-[50px] py-[0.2rem] shadow-lg px-[1rem] ">
          <img
            src={Images.CareerCardImageFifteen}
            alt="Person"
            className="w-6 h-6 border border-[#ee009d] rounded-full"
          />
          <div className="w-full">
            <h2 className="text-[12px] sm:text-[14px] font-medium tracking-wide">
              Allaya Cooks-Campbell
            </h2>
          </div>
        </div>
        <p className="text-xs text-gray-500 bg-[#fff] py-[0.5rem] flex items-center justify-center gap-[0.5rem]  rounded-[50px] sm:text-right w-[120px]">
          {" "}
          <FaCalendarDays color="#ee009d" /> May 2022
        </p>
      </section>
      <section className="flex items-center justify-center">
        <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto  ">
          <h1 className="text-[16px] sm:text-[24px] font-sans font-semibold tracking-wide">
            Setting Your Rates as a Virtual Assistant
          </h1>
          <p className="text-xs sm:text-[14px] leading-[20px] text-gray-500 mt-2 tracking-[0.5px]">
            Determining your rates as a virtual assistant can be challenging,
            but it is crucial for your business success. Start by researching
            the average rates for VAs with similar skills and experience in your
            region. Consider your expertise, the complexity of the tasks, and
            the time required to complete them. Decide whether to charge hourly
            or per project, keeping in mind that project-based pricing can often
            be more beneficial for both parties. Be transparent with clients
            about your rates and any additional costs. Don't undervalue your
            services; remember that your skills and time are valuable. As you
            gain more experience and skills, gradually increase your rates to
            reflect your growing expertise.
          </p>
        </div>
      </section>
      <section className="">
        <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
          <h1 className="text-[16px] sm:text-[24px] font-sans font-semibold tracking-wide">
            Advice for entering the workforce{" "}
          </h1>
          <p className="text-xs sm:text-[14px] leading-[20px] text-gray-500 mt-2">
            "Opportunities does not happen, you create them." -Chris Grosser
          </p>
        </div>
        {/* create vision section */}
        <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
          <h1 className="text-[16px] sm:text-[22px] font-sans font-medium tracking-wide">
            1. Building a Client Base as a Virtual Assistant{" "}
          </h1>
          <p className="text-xs sm:text-[14px] leading-[20px] xl:w-[60%] lg:w-[60%] text-gray-500 mt-2 tracking-[0.5px]">
            Building a solid client base is essential for a successful virtual
            assistant career. Start by networking within your existing circles,
            including friends, family, and professional connections, to find
            potential clients. Utilize social media platforms, particularly
            LinkedIn, to showcase your services and engage with potential
            clients. Consider offering a free or discounted initial service to
            new clients to demonstrate your value. Join online communities and
            forums related to your niche to connect with business owners in need
            of assistance. Consistently delivering high-quality work and
            maintaining good relationships with clients will lead to referrals
            and a growing client base.
          </p>
        </div>
        {/* Plan ahead section */}
        <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
          <h1 className="text-[16px] sm:text-[22px] font-sans font-medium tracking-wide">
            2. Getting Started as a Virtual Assistant{" "}
          </h1>
          <p className="text-xs sm:text-[14px] leading-[20px] xl:w-[60%] lg:w-[60%] text-gray-500 mt-2 tracking-[0.5px]">
            Starting a career as a virtual assistant (VA) is an excellent option
            for those seeking flexibility and the opportunity to work from
            anywhere. To begin, assess your skills and identify the services you
            can offer, such as administrative support, social media management,
            or customer service. Create a professional online presence with a
            well-crafted LinkedIn profile and a simple website highlighting your
            expertise. Join freelancing platforms like WeWorkPerHour, Upwork or
            Fiverr to find your first clients. Don&#39;t forget to invest in
            reliable technology, including a good computer and stable internet
            connection, to ensure you can work efficiently. As you gain
            experience, ask for testimonials to build credibility and attract
            more clients.
          </p>
        </div>
        {/* Learn as much as you can section */}
        <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
          <h1 className="text-[16px] sm:text-[22px] font-sans font-medium tracking-wide">
            3. Essential Skills for Virtual Assistants{" "}
          </h1>
          <p className="text-xs sm:text-[14px] leading-[20px] xl:w-[60%] lg:w-[60%] text-gray-500 mt-2 tracking-[0.5px]">
            To thrive as a virtual assistant, certain skills are indispensable.
            First, strong communication skills are crucial since you&#39;ll
            often interact with clients remotely. Excellent organizational
            abilities help manage multiple tasks and deadlines effectively.
            Familiarize yourself with common digital tools like Microsoft
            Office, Google Workspace, and project management software such as
            Trello or Asana. Time management is also vital; using tools like
            Calendly or Toggl can help you stay on top of your schedule. Lastly,
            problem-solving skills and adaptability will enable you to handle
            unexpected challenges efficiently. Continuously improving these
            skills will enhance your service quality and client satisfaction.
          </p>
        </div>
        <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
          <h1 className="text-[16px] sm:text-[22px] font-sans font-medium tracking-wide">
            4. Leverage Prints
          </h1>
          <p className="text-xs sm:text-[14px] leading-[20px] xl:w-[60%] lg:w-[60%] text-gray-500 mt-2 tracking-[0.5px]">
            Partnering with WeWorkPerHour for virtual assistant services
            has been fantastic for our printing and branding business.
            They have taken over administrative tasks, handled customer
            orders, and managed our schedule seamlessly. It's freed up our
            team to concentrate on producing high- quality prints and expanding
            our services. We're thrilled with the efficiency and
            professionalism they bring to the table!;
          </p>
        </div>
        <div className=" ml-[7.5rem] w-[50%]   border-[1px] border-[#2AA100] mt-[2rem]" />
        <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
          <h1 className="text-[16px] sm:text-[20px] font-sans font-medium tracking-wide">
            Related Tips:
          </h1>
        </div>
        <div className="lg:px-[4rem] ">
          <section className="py-[1rem]">
            <div className="flex justify-center">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:items-center justify-center gap-[1rem] space-y-[2rem] sm:space-y-0 py-[2rem]">
                {jobData.map((job, index) => (
                  <LearnMoreCard
                    key={index}
                    personImage={job.personImage}
                    personName={job.personName}
                    sliderDescription={job.sliderDescription}
                    sliderImage={job.sliderImage}
                    sliderTitle={job.sliderTitle}
                    lastUpdated={job.lastUpdated}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
        <ComeJoinUsSection />
        <FooterSection />
      </section>
    </section>
  );
};

export default LearnMoreSection;
