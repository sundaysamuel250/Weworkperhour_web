import React from 'react'
import StarRating from '../../components/reusable/StarRating';

interface CardSlideProps {
    sliderImage: string;
    sliderTitle: string;
    sliderDescription: string;
    sliderName: string;
}

const CardSlider: React.FC <CardSlideProps>= ({sliderImage, sliderTitle, sliderDescription, sliderName}) => {
  return (
    <section>
        <section className='flex justify-center items-center'>
            <div className='z-[-20]'>
                <img src={sliderImage} alt="all" className='w-[50%] h-[50%] rounded-md' />
            </div>
           <div className='lg:w-[400px] lg:h-[250px] md:w-[300px] md:h-[210px] w-[270px] h-[200px] bg-[#fff] absolute xl:right-[5%] lg:right-[1%] md:right-[1%] right-[2%] shadow-lg py-[1rem] px-[1rem] rounded-md'> 
           <div>
                <h1 className='text-[20px] mt-[1rem] font-sans font-semibold tracking-[1px]'>{sliderTitle}</h1>
                <p className='lg:text-[14px] md:text-[14px] text-[10px] text-[#646A73] font-sans font-normal mt-[0.5rem]'>{sliderDescription}</p>
            </div>
            <div className='flex items-center justify-center  lg:gap-[11rem] md:gap-[6rem] gap-[5rem] mt-[0.2rem]'>
            <h6 className='lg:text-[12px] text-[10px] font-sans font-semibold tracking-[1px]'>{sliderName}</h6>
            <p>{<StarRating totalStars={5} />}</p>
            </div>
           </div>
        </section>
    </section>
  )
}

export default CardSlider