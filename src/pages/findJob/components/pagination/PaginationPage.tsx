import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import FindJobCardSection from '../FindJobCardSection';
import Images from '../../../../components/constant/Images';

const jobData = [
    {
        companyLogo: Images.HuaweiImage,
        companyName: 'Huawei',
        LocationName: 'Lekki Lagos, Nigeria',
        jobTitle: "Customer Care Assistant",
        jobStyleOne:"Hybrid",
        jobStyleTwo: "Remote",
        jobStyleThree: "Onsite",
        jobDescription: "We are looking for a talented Customer Care Assistant to join our team...",
        payment: 400
    },
    {
        companyLogo: Images.ModernaImage,
        companyName: 'Moderna',
        LocationName: 'Lekki Lagos, Nigeria',
        jobTitle: "Compliance Head",
        jobStyleOne:"Hybrid",
        jobStyleTwo: "Remote",
        jobStyleThree: "Onsite",
        jobDescription: "We are looking for a talented compliance head to join our team...",
        payment: 1000
    },
    {
        companyLogo: Images.AccessbankImage,
        companyName: 'Access Bank',
        LocationName: 'Lekki Lagos, Nigeria',
        jobTitle: "IT Specialist",
        jobStyleOne:"Hybrid",
        jobStyleTwo: "Remote",
        jobStyleThree: "Onsite",
        jobDescription: "We are looking for a talented IT specialist to join our team...",
        payment: 2000
    },
    {
        companyLogo: Images.SterlingBankImage,
        companyName: 'Sterling Bank',
        LocationName: 'Surulere Lagos, Nigieria',
        jobTitle: "Head of Margeting",
        jobStyleOne:"Hybrid",
        jobStyleTwo: "Remote",
        jobStyleThree: "Onsite",
        jobDescription: "We are looking for a talented head of marketing to join our team...",
        payment: 1400
    },
    {
        companyLogo: Images.ThreadsImage,
        companyName: 'Threads',
        LocationName: 'Alanta Georgia, USA',
        jobTitle: "Product Designer",
        jobStyleOne:"Hybrid",
        jobStyleTwo: "Remote",
        jobStyleThree: "Onsite",
        jobDescription: "We are looking for a talented product designer to join our team...",
        payment: 1500
    },
    {
        companyLogo: Images.SamsungImage,
        companyName: 'Samsung',
        LocationName: 'Alanta Georgia, USA',
        jobTitle: "Digital Marketing",
        jobStyleOne:"Hybrid",
        jobStyleTwo: "Remote",
        jobStyleThree: "Onsite",
        jobDescription: "We are looking for a talented digital marketing to join our team...",
        payment: 800
    },
    {
        companyLogo: Images.FacebookImage,
        companyName: 'Facebook',
        LocationName: 'New York, USA',
        jobTitle: "Software Engineer",
        jobDescription: "We are looking for a talented software engineer to join our team...",
        jobStyleOne:"Hybrid",
        jobStyleTwo: "Remote",
        jobStyleThree: "Onsite",
        payment: 1500 // example payment amount in Naira
    },
   {
    companyLogo: Images.UBAImage,
      companyName: 'UBA Bank',
      LocationName: 'Surulere Lagos, Nigeria',
      jobTitle: "Customer Support Officer",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for a talented customer support officer to join our team...",
      payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo:Images.PalmpayImage,
      companyName: 'Palmpay',
      LocationName: 'Ikeja Lagos, Nigeria',
      jobTitle: "Full stack Developer",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for full stack developer to join our team...",
      payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.NetflixImage,
      companyName: 'Netflix',
      LocationName: 'New York, USA',
      jobTitle: "React Developer",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for a talented software engineer to join our team...",
      payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.TwitterImage,
      companyName: 'Twiiter',
      LocationName: 'New York, USA',
      jobTitle: "Back-end Engineer",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for a talented software engineer to join our team...",
      payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.AppleImage,
      companyName: 'Apple',
      LocationName: 'New York, USA',
      jobTitle: "Quality Assurance",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for a talented software engineer to join our team...",
      payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.MicrosoftImage,
    companyName: 'Mircrosoft',
    LocationName: 'New York, USA',
    jobTitle: "DevOps Engineer",
    jobStyleOne:"Hybrid",
    jobStyleTwo: "Remote",
    jobStyleThree: "Onsite",
    jobDescription: "We are looking for a talented DevOps engineer to join our team...",
    payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.GoogleImage,
      companyName: 'Google',
      LocationName: 'New York, USA',
      jobTitle: "Software Engineer",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for a talented software engineer to join our team...",
      payment: 700// example payment amount in Naira
   },
   {
    companyLogo: Images.MoniepointImage,
      companyName: 'Moniepoint',
      LocationName: 'Ikeja Lagos, Nigeria',
      jobTitle: "Backend Engineer",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for a talented backend engineer to join our team...",
      payment: 2800 // example payment amount in Naira
   },
   {
    companyLogo: Images.AmazonImage,
      companyName: 'Amazon',
      LocationName: 'Ontario, Canada',
      jobTitle: "IT Specialist",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for a talented IT specialist to join our team...",
      payment: 1600 // example payment amount in Naira
   },
   {
    companyLogo: Images.OracleImage,
    companyName: 'Oracle',
    LocationName: 'New York, USA',
    jobTitle: "UX/UI Designer",
    jobStyleOne:"Hybrid",
    jobStyleTwo: "Remote",
    jobStyleThree: "Onsite",
    jobDescription: "We are looking for a ui ux designer to join our team...",
    payment: 1800 // example payment amount in Naira
   },
   {
    companyLogo: Images.MicrosoftImage,
    companyName: 'Mircrosoft',
    LocationName: 'New York, USA',
    jobTitle: "DevOps Engineer",
    jobStyleOne:"Hybrid",
    jobStyleTwo: "Remote",
    jobStyleThree: "Onsite",
    jobDescription: "We are looking for a talented DevOps engineer to join our team...",
    payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.PaypalImage,
    companyName: 'Paypal',
    LocationName: 'New York, USA',
    jobTitle: "Software Engineer",
    jobStyleOne:"Hybrid",
    jobStyleTwo: "Remote",
    jobStyleThree: "Onsite",
    jobDescription: "We are looking for a talented software engineer to join our team...",
    payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.TiktokImage,
      companyName: 'Tiktok',
      LocationName: 'Alanta Georgia, USA',
      jobTitle: "Product Designer",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for a product designer to join our team...",
      payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.AppleImage,
    companyName: 'Apple',
    LocationName: 'Alanta Georgia, USA',
    jobTitle: "Swift Developer",
    jobStyleOne:"Hybrid",
    jobStyleTwo: "Remote",
    jobStyleThree: "Onsite",
    jobDescription: "We are looking for a swift developer to join our team...",
    payment: 2500// example payment amount in Naira
   },
   {
    companyLogo: Images.UberImage,
    companyName: 'Uber',
    LocationName: 'North America',
    jobTitle: "SEO Associate",
    jobStyleOne:"Hybrid",
    jobStyleTwo: "Remote",
    jobStyleThree: "Onsite",
    jobDescription: "We are looking for a talented SEO Associate to join our team...",
    payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.FirstBankImage,
      companyName: 'First Bank',
      LocationName: 'Marina Lagos Nigeria',
      jobTitle: "Team Lead",
      jobStyleOne:"Hybrid",
      jobStyleTwo: "Remote",
      jobStyleThree: "Onsite",
      jobDescription: "We are looking for a talented team lead to join our team...",
      payment: 1500 // example payment amount in Naira
   },
   {
    companyLogo: Images.SterlingBankImage,
    companyName: 'Sterling Bank',
    LocationName: 'Surulere Lagos, Nigieria',
    jobTitle: "Head of Margeting",
    jobStyleOne:"Hybrid",
    jobStyleTwo: "Remote",
    jobStyleThree: "Onsite",
    jobDescription: "We are looking for a talented head of marketing to join our team...",
    payment: 1400 // example payment amount in Naira
   }
    // Add more job data here if needed
];

const ITEMS_PER_PAGE = 6;

const PaginationPage: React.FC = () => {
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
        <div style={{ padding: '30px' }}>
            <section>
                <div className="flex justify-center">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:items-center justify-center gap-[2rem] py-[4rem]">
                        {displayedJobs.map((job, index) => (
                            <FindJobCardSection
                                key={index}
                                companyLogo={job.companyLogo}
                                companyName={job.companyName}
                                LocationName={job.LocationName}
                                jobTitle={job.jobTitle}
                                jobDescription={job.jobDescription}
                                payment={job.payment}
                                jobStyleOne={job.jobStyleOne}
                                jobStyleTwo={job.jobStyleTwo}
                                jobStyleThree={job.jobStyleThree}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default PaginationPage;
