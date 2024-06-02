import React from 'react'
import Images from '../../../components/constant/Images'
import { BiChevronRight } from 'react-icons/bi'
import { FaCalendarDays } from 'react-icons/fa6'
import LearnMoreCard from './LearnMoreCard';
import FooterSection from '../../../components/reusable/FooterSection';
import ComeJoinUsSection from '../../home/components/ComeJoinUsSection';

const jobData = [
  {
      personImage: Images.SliderImageOne,
      sliderImage: Images.CareerCardImageFour,
      sliderTitle: '4 Pieces of the best career advice',
      sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
      personName: 'John Daniel',
      lastUpdated: 'March 2024',
  },
  {
      personImage: Images.SliderImageOne,
      sliderImage: Images.CareerCardImageFive,
      sliderTitle: '4 Pieces of the best career advice',
      sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
      personName: 'Harrison Jean',
      lastUpdated: 'April 2023',
  },
  {
      personImage: Images.SliderImageOne,
      sliderImage: Images.CareerCardImageSix,
      sliderTitle: '4 Pieces of the best career advice',
      sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
      personName: 'Marie Johnson',
      lastUpdated: 'Jan 2024',
  },
];

const LearnMoreSection: React.FC = () => {
  return (
    <section>
        <div className='flex gap-[1.5rem] xl:ml-[8rem] lg:ml-[8rem] md:ml-[2rem] ml-[2rem] mt-[8rem]'>
      <h2 className='flex gap-[2px] font-sans lg:text-[18px] md:text-[16px] sm:text-[12px] justify-center items-center text-[#2aa100]'>Home <BiChevronRight size={25} /></h2>
      <h2 className='flex gap-[2px] font-sans lg:text-[18px] md:text-[16px] sm:text-[12px] justify-center items-center text-[#2aa100]'>Career Tips  <BiChevronRight size={25} /></h2>
      <h2 className='lg:text-[18px] md:text-[16px] sm:text-[12px] text-[#646A73]'>Articles Career Tips</h2>
    </div>
        <section>
        
        <div className="xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto py-[2rem]">
                <img src={Images.CareerSliderImageOne} alt="slider" className="w-full h-[100%] rounded-md" />
            </div>
        </section>
         <section className='flex items-center justify-center xl:space-x-[50rem] lg:space-x-[28rem] md:space-x-[20rem] space-x-[2rem]'>
         <div className="flex items-center gap-4 bg-[#fff] w-[220px] sm:w-[250px] rounded-[50px] py-[0.2rem] shadow-lg px-[1rem] ">
                        <img src={Images.CareerCardImageFifteen} alt="Person" className="w-6 h-6 border border-[#ee009d] rounded-full" />
                        <div className="w-full">
                            <h2 className="text-[12px] sm:text-[14px] font-medium tracking-wide">Allaya Cooks-Campbell</h2>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 bg-[#fff] py-[0.5rem] flex items-center justify-center gap-[0.5rem]  rounded-[50px] sm:text-right w-[120px]"> <FaCalendarDays color='#ee009d' /> May 2022</p>
         </section>
         <section className="flex items-center justify-center">
         <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto  ">
                    <h1 className="text-[16px] sm:text-[24px] font-sans font-semibold tracking-wide">4 Pieces of the best career advice</h1>
                    <p className="text-xs sm:text-[14px] leading-[20px] text-gray-500 mt-2">When we are young, we spend so much time thinking about what we will become when we group up.We imagined what it would be like to work in various fields. We dream of the difference we want to make, and we plan the best way to make it happen.</p>
                </div>
         </section>
         <section className="">
         <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
                    <h1 className="text-[16px] sm:text-[24px] font-sans font-semibold tracking-wide">Advice for entering the workforce </h1>
                    <p className="text-xs sm:text-[14px] leading-[20px] text-gray-500 mt-2">"Opportunities does not happen, you create them." -Chris Grosser</p>
                </div>
                {/* create vision section */}
                <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
                    <h1 className="text-[16px] sm:text-[22px] font-sans font-medium tracking-wide">1. Create A vision statement  </h1>
                    <p className="text-xs sm:text-[14px] leading-[20px] xl:w-[60%] lg:w-[60%] text-gray-500 mt-2">
                      What do you want to do? What will your career look like, and what impact will it make?
                      Once you understand your career aspirations, you'll be in a better position to choose
                      the work you love. Use your vision statement as inspirationto create a vision board.
                    </p>
                </div>
                {/* Plan ahead section */}
                <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
                    <h1 className="text-[16px] sm:text-[22px] font-sans font-medium tracking-wide">2. Plan ahead </h1>
                    <p className="text-xs sm:text-[14px] leading-[20px] xl:w-[60%] lg:w-[60%] text-gray-500 mt-2">
                      If you've had any experience at all in the working world, you've probably started to identity what you want - and what work doesn't a;ign with your personal values.
                      make use of this information to shape your career. Take it into account when you're doing your career planning (which should happen at least once a year).
                    </p>
                </div>
                {/* Learn as much as you can section */}
                <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
                    <h1 className="text-[16px] sm:text-[22px] font-sans font-medium tracking-wide">3. Learn as much as you can </h1>
                    <p className="text-xs sm:text-[14px] leading-[20px] xl:w-[60%] lg:w-[60%] text-gray-500 mt-2">
                     Cultivate a beginners' mindset is a critical part of career growth. Taken advantage of on-the-job training to learn as much as you can. Ask questions and get to know
                     people across the organization. Try job shadowing someone to learn what their role is like. You can also try reading some career books to help absorb expect advice
                    </p>
                </div>
                <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
                    <h1 className="text-[16px] sm:text-[22px] font-sans font-medium tracking-wide">4. Don't be afraid to say no</h1>
                    <p className="text-xs sm:text-[14px] leading-[20px] xl:w-[60%] lg:w-[60%] text-gray-500 mt-2">
                    I firmly believe that opportuniies can come from anywhere -but if your gut syas no,
                    listen. Don't feel pressured to take a job that feels out of alignment with what you 
                    want for yourself. Sometimes, it's better to gracefully decline a job offer than to get blown off course.
                    </p>
                </div>
                <div className=' ml-[7.5rem] w-[50%]   border-[1px] border-[#2AA100] mt-[2rem]'/>
                <div className="mt-4 xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] max-w-[350px] mx-auto">
                    <h1 className="text-[16px] sm:text-[20px] font-sans font-medium tracking-wide">Related Tips:</h1>
                </div>
                <div className='lg:px-[4rem] '>
            <section className='py-[1rem]'>
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
  )
}

export default LearnMoreSection