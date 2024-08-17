// src/components/Carousel.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-[#000] h-[80px] mt-[20rem]'>
      <Slider {...settings}>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div> <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
        <div className="text-center text-white slide-item mt-[1rem]">
          <h1 className="font-poppins text-[18px]">KRYPTREX OTC</h1>
        </div>
       

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
