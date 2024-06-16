import React, { FunctionComponent } from 'react';
import Images from '../../../../components/constant/Images';
import SuggestionCrad from './SuggetionCard';

const Suggestion: FunctionComponent = () => {
  return (
    <div className="flex justify-center">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:items-center justify-center gap-[2rem] py-[4rem]">
    <SuggestionCrad
      companyLogo={Images.StanbicImage}
      companyName='Stanbic IBTC'
      LocationName='Lekki Lagos, Nigeria'
      jobTitle="Customer Service"
      jobDescription="We are looking for a customer service to join our team..."
      payment={700} // example payment amount in Naira
    />
    <SuggestionCrad
      companyLogo={Images.UBAImage}
      companyName='UBA Bank'
      LocationName='Surulere Lagos, Nigeria'
      jobTitle="Customer Support Officer"
      jobDescription="We are looking for a talented customer support officer to join our team..."
      payment={1500} // example payment amount in Naira
    />
    <SuggestionCrad
      companyLogo={Images.ZenithBankImage}
      companyName='Zenith Bank'
      LocationName='Lekki Lagos, Nigeria'
      jobTitle="Entry Level Recruitment"
      jobDescription="We are looking for graduate training from 25 years below  to join our team..."
      payment={1500} // example payment amount in Naira
    />
    </div>
  </div>
  );
};

export default Suggestion;
