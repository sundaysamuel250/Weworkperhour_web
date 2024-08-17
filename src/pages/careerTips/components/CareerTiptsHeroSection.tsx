import React, { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSliderCareer from './CardSliderCareer';
import Images from '../../../components/constant/Images';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CareerTipsHeroSection: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Slider {...settings}>
        <CardSliderCareer 
          personImage={Images.SliderImageOne}
          sliderImage={Images.CareerSliderImageOne}
          sliderTitle='4 Pieces of the best career advice'
          sliderDescription="When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what it would be like to work in various fields. We dream of the difference we want to make...."
          personName='John Daniel'
          lastUpdated='March 2024'
        />
        <CardSliderCareer 
          personImage={Images.SliderImageTwo}
          sliderImage={Images.CareerSliderImageTwo}
          sliderTitle='4 Pieces of the best career advice'
          sliderDescription="When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what it would be like to work in various fields. We dream of the difference we want to make...."
          personName='John Daniel'
          lastUpdated='March 2024'
        />
        <CardSliderCareer 
          personImage={Images.SliderImageThree}
          sliderImage={Images.CareerSliderImageThree}
          sliderTitle='4 Pieces of the best career advice'
          sliderDescription="When we are young, we spend so much time thinking about what we will become when we grow up. We imagined what it would be like to work in various fields. We dream of the difference we want to make...."
          personName='John Daniel'
          lastUpdated='March 2024'
        />
      </Slider>
      </motion.div>
  );
};

export default CareerTipsHeroSection;
