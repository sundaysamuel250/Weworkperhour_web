import React, { useState, useEffect } from 'react';
import Images from '../../../../components/constant/Images';
import CareerTipSCardSection from './CareerTipSCardSection';
import CareerPagination from './CareerPagination';

const jobData = [
    {
        personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageFour,
        sliderTitle: 'Setting Your Rates as a Virtual Assistant',
        sliderDescription: "Determining your rates as a virtual assistant can be challenging, but it is crucial for your business success. Start by researching the average rates for VAs with similar skills and experience in your region. Consider your expertise, the complexity of the tasks, and the time required to complete them...",
        personName: 'John Daniel',
        lastUpdated: 'March 2024',
    },
    {
        personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageFive,
        sliderTitle: 'Building a Client Base as a Virtual Assistant',
        sliderDescription: "Building a solid client base is essential for a successful virtual assistant career. Start by networking within your existing circles, including friends, family, and professional connections, to find potential clients. Utilize social media platforms, particularly LinkedIn, to showcase your...",
        personName: 'Harrison Jean',
        lastUpdated: 'April 2023',
    },
    {
        personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageSix,
        sliderTitle: 'Essential Skills for Virtual Assistants',
        sliderDescription: "To thrive as a virtual assistant, certain skills are indispensable. First, strong communication skills are crucial since you will often interact with clients remotely. Excellent organizational abilities help manage multiple tasks and deadlines effectively...",
        personName: 'Marie Johnson',
        lastUpdated: 'Jan 2024',
    },
    {
        personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageSeven,
        sliderTitle: 'Getting Started as a Virtual Assistant',
        sliderDescription: "Starting a career as a virtual assistant (VA) is an excellent option for those seeking flexibility and the opportunity to work from anywhere. To begin, assess your skills and identify the services you can offer, such as administrative support, social media management, or customer service...",
        personName: 'James Henry',
        lastUpdated: 'Feb 2024',
    },
    {
        personImage:Images.SliderImageOne,
        sliderImage: Images.CareerCardImageEight,
        sliderTitle: 'Leverage Prints',
        sliderDescription: "Partnering with WeWorkPerHour for virtual assistant services has been fantastic for our printing and branding business. They have taken over administrative tasks, handled customer orders, and managed our schedule seamlessly. It is freed up our team to concentrate on producing high-quality prints and expanding our services...",
        personName: 'John Daniel',
        lastUpdated: 'March 2024',
    },
    {
        personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageNine,
        sliderTitle: 'Managing Work-Life Balance as a Virtual Assistant',
        sliderDescription: "One of the biggest challenges for virtual assistants is maintaining a healthy work-life balance. Start by setting clear boundaries between work and personal time. Establish a dedicated workspace to help mentally separate work from home life. Create a daily schedule that includes regular breaks and stick to it as much as possible. Use productivity...",
        personName: 'John Alexander',
        lastUpdated: 'March 2024',
    },
];

const ITEMS_PER_PAGE = 4;

const PaginationSection: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(jobData.length / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (jobData.length > ITEMS_PER_PAGE) {
            setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
        }
    }, [totalPages]);

    const displayedJobs = jobData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div className='lg:p-[4rem]'>
            <section className='py-[2rem]'>
                <div className="flex justify-center">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:items-center justify-center gap-[1rem] space-y-[2rem] sm:space-y-0 py-[4rem]">
                        {displayedJobs.map((job, index) => (
                            <CareerTipSCardSection
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
            <CareerPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default PaginationSection;
