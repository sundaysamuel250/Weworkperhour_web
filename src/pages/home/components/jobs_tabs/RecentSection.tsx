import React from 'react';
import CardSection from './CardSection';
import Images from '../../../../components/constant/Images';




const RecentSection: React.FC= () => {

 return (
  <div className="flex justify-center">
  <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:items-center justify-center gap-[2rem] py-[4rem]">
    <CardSection
      companyLogo={Images.GoogleImage}
      companyName='Google'
      LocationName='New York, USA'
      jobTitle="Software Engineer"
      jobDescription="We are looking for a talented software engineer to join our team..."
      payment={700} // example payment amount in Naira
    />
    <CardSection
      companyLogo={Images.NetflixImage}
      companyName='Netflix'
      LocationName='New York, USA'
      jobTitle="React Developer"
      jobDescription="We are looking for a talented software engineer to join our team..."
      payment={1500} // example payment amount in Naira
    />
    <CardSection
      companyLogo={Images.FacebookImage}
      companyName='Facebook'
      LocationName='New York, USA'
      jobTitle="Software Engineer"
      jobDescription="We are looking for a talented software engineer to join our team..."
      payment={1500} // example payment amount in Naira
    />
    <CardSection
      companyLogo={Images.TwitterImage}
      companyName='Twiiter'
      LocationName='New York, USA'
      jobTitle="Back-end Engineer"
      jobDescription="We are looking for a talented software engineer to join our team..."
      payment={1500} // example payment amount in Naira
    />
    <CardSection
      companyLogo={Images.AppleImage}
      companyName='Apple'
      LocationName='New York, USA'
      jobTitle="Quality Assurance"
      jobDescription="We are looking for a talented software engineer to join our team..."
      payment={1500} // example payment amount in Naira
    />
    <CardSection
      companyLogo={Images.MicrosoftImage}
      companyName='Mircrosoft'
      LocationName='New York, USA'
      jobTitle="DevOps Engineer"
      jobDescription="We are looking for a talented DevOps engineer to join our team..."
      payment={1500} // example payment amount in Naira
    />
  </div>
</div>
  );
};

export default RecentSection;
