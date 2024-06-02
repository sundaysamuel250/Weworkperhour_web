import React, { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSliderCareer from './CardSliderCareer';
import Images from '../../../components/constant/Images';




const CareerTipsHeroSection: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, // Adjust the autoplay speed
    speed: 2000, // Adjust the transition speed
    fade: true, // Use fade effect
    cssEase: 'linear', // Use linear easing for fade effect
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=''>
      <Slider {...settings}>
      <CardSliderCareer 
   personImage={Images.SliderImageOne}
    sliderImage={Images.CareerSliderImageOne}
    sliderTitle='4 Pieces of the best career advice'
    sliderDescription="When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make...."
    personName='John Daniel'
    lastUpdated='March 2024'
   />
   <CardSliderCareer 
   personImage={Images.SliderImageTwo}
    sliderImage={Images.CareerSliderImageTwo}
    sliderTitle='4 Pieces of the best career advice'
    sliderDescription="When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make...."
    personName='John Daniel'
    lastUpdated='March 2024'
   />
   <CardSliderCareer 
   personImage={Images.SliderImageThree}
    sliderImage={Images.CareerSliderImageThree}
    sliderTitle='4 Pieces of the best career advice'
    sliderDescription="When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what is would be like to work in various fields. We dream of difference we want to make...."
    personName='John Daniel'
    lastUpdated='March 2024'
   />
      </Slider>
    </div>
  );
};

export default CareerTipsHeroSection;
