import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown } from "react-icons/fa";


const SwipeableProductCarousel = ( ) =>
{
    const images = [
      "/images/bag1.png",
      "/images/bag2.png",
      "/images/bag3.png",
      // Add more image paths as needed
    ];

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,

  };

  return (
    <div className="relative slideshow-wrapper h-[34rem] rounded-2xl mx-4 shadow-2xl bg-yellow-300 ">
      <div className="h-full">
        <h2 className="text-center py-2 px-4 font-bold text-3xl rounded-t-xl  bg-white text-carpetMoss">
          TYPES
        </h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide-item ">
              <div className="slide-content flex flex-col justify-center items-center">
                <Image
                  src={image}
                  width={285}
                  height={250}
                  className=""
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slider>
        <span className="absolute bottom-4 left-44">
          <FaChevronDown className="text-3xl" />
        </span>
      </div>
    </div>
  );
};

export default SwipeableProductCarousel;
