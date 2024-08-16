import React, { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from './CardSlider';
import Images from '../../components/constant/Images';




const ImageCardSliderSection: FC = () => {
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
      <CardSlider 
           sliderImage={Images.SliderImageOne}
           sliderTitle='Amazing!'
           sliderDescription="'Weworkperhour is great platform for us, with weworkperhour we can do recruitment easily and quickly so that we get qaulified candidate thanks Weworkperhour"
           sliderName='John Daniel'
           />
            <CardSlider 
           sliderImage={Images.SliderImageTwo}
           sliderTitle='Amazing!'
           sliderDescription="'Weworkperhour is great platform for us, with weworkperhour we can do recruitment easily and quickly so that we get qaulified candidate thanks Weworkperhour"
           sliderName='Jason Raph'
           />
            <CardSlider 
           sliderImage={Images.SliderImageThree}
           sliderTitle='Amazing!'
           sliderDescription="'Weworkperhour is great platform for us, with weworkperhour we can do recruitment easily and quickly so that we get qaulified candidate thanks Weworkperhour"
           sliderName='Maria Michael'
           />
      </Slider>
    </div>
  );
};

export default ImageCardSliderSection;
