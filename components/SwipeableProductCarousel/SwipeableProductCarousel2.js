import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  <div className="absolute left-1 top-0 h-full w-6">
    <div
      className={` py-6 flex justify-center items-center  cursor-pointer ${
        currentSlide === 0 ? "invisible" : ""
      }`}
      onClick={() => onClick()}
    >
      <FaChevronLeft
        className="absolute text-4xl opacity-30 z-10 inset-0 m-auto"
      />
    </div>
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => (
  <div className="absolute top-0 right-4 h-full w-6">
    <div
      className={` py-6 flex justify-center items-center  cursor-pointer ${
        currentSlide === slideCount - 1 ? "invisible" : ""
      }`}
      onClick={() => onClick()}
    >
      <FaChevronRight
        onClick={() => console.log("hello")}
        className="absolute text-4xl opacity-30 z-20 inset-0 m-auto"
      />
    </div>
  </div>
);

const SwipeableProductCarousel = () =>
{
      
    
  const images = [
    "/images/NormalSize/topSativa-n.png",
    "/images/NormalSize/outdoorSativa-n.png",
    "/images/NormalSize/indoorSativa-n.png",
    // Add more image paths as needed
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className=" rounded-xl  mx-4 bg-yellow-300 bg-opacity-90">
      <h2 className=" text-center py-2 px-4 font-bold text-3xl rounded-t-xl bg-white text-carpetMoss">
        QUALITY
      </h2>
      <div className="py-2">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="relative slide-item h-full">
              <div className="py-5" />
              <div className="slide-content flex items-center justify-center h-full">
                <Image
                  src={image}
                  width={150}
                  height={150}
                  className="object-cover my-2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
              <div className="py-5" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SwipeableProductCarousel;
