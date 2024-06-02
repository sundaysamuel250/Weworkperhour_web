import React, { useState, useEffect } from 'react';
import Images from '../../../../components/constant/Images';
import CareerTipSCardSection from './CareerTipSCardSection';
import CareerPagination from './CareerPagination';

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
    {
        personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageSeven,
        sliderTitle: '4 Pieces of the best career advice',
        sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
        personName: 'James Henry',
        lastUpdated: 'Feb 2024',
    },
    {
        personImage:Images.SliderImageOne,
        sliderImage: Images.CareerCardImageEight,
        sliderTitle: '4 Pieces of the best career advice',
        sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
        personName: 'John Daniel',
        lastUpdated: 'March 2024',
    },
    {
        personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageNine,
        sliderTitle: '4 Pieces of the best career advice',
        sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
        personName: 'John Alexander',
        lastUpdated: 'March 2024',
    },
    {
        personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageTen,
        sliderTitle: '4 Pieces of the best career advice',
        sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
        personName:'Hudson',
        lastUpdated: 'May 2024',
    },
   {
    personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageEleven,
        sliderTitle: '4 Pieces of the best career advice',
        sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
        personName:'William Austin',
        lastUpdated: 'March 2024',
   },
   {
    personImage: Images.SliderImageOne,
        sliderImage: Images.CareerCardImageTwelve,
        sliderTitle: '4 Pieces of the best career advice',
        sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
        personName:'Jude Gloria',
        lastUpdated: 'June 2024',
   },
   {
    personImage: Images.SliderImageOne,
    sliderImage: Images.CareerCardImageThirteen,
    sliderTitle: '4 Pieces of the best career advice',
    sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
    personName:'Victoria Adebayo',
    lastUpdated: 'March 2024',
   },
   {
    personImage: Images.SliderImageOne,
    sliderImage: Images.CareerCardImageFourteen,
    sliderTitle: '4 Pieces of the best career advice',
    sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
    personName:'John Daniel',
    lastUpdated: 'March 2024',
   },
   {
    personImage: Images.SliderImageOne,
    sliderImage: Images.EasilyImage,
    sliderTitle: '4 Pieces of the best career advice',
    sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
    personName:'John Daniel',
    lastUpdated: 'March 2024',
   },
   {
    personImage: Images.SliderImageOne,
    sliderImage: Images.CareerSliderImageOne,
    sliderTitle: '4 Pieces of the best career advice',
    sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
    personName:'John Daniel',
    lastUpdated: 'March 2024',
   },
   {
    personImage: Images.SliderImageOne,
        sliderImage: Images.CareerSliderImageOne,
        sliderTitle: '4 Pieces of the best career advice',
        sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
        personName:'John Daniel',
        lastUpdated: 'March 2024',
   },
   {
    personImage: Images.SliderImageOne,
    sliderImage: Images.CareerSliderImageOne,
    sliderTitle: '4 Pieces of the best career advice',
    sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
    personName:'John Daniel',
    lastUpdated: 'March 2024',
   },
    {
    personImage: Images.SliderImageOne,
    sliderImage: Images.CareerSliderImageOne,
    sliderTitle: '4 Pieces of the best career advice',
    sliderDescription: "When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make....",
    personName:'John Daniel',
    lastUpdated: 'March 2024',
   }
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
