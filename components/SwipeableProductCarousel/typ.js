import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className={`py-1 flex justify-center items-center cursor-pointer ${
      currentSlide === 0 ? "invisible" : ""
    }`}
    onClick={() => onClick()}
  >
    <FaChevronUp className="text-4xl opacity-30" />
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className={`py-1 flex justify-center items-center cursor-pointer ${
      currentSlide === slideCount - 1 ? "invisible" : ""
    }`}
    onClick={() => onClick()}
  >
    <FaChevronDown className="text-4xl opacity-30" />
  </div>
);

const SwipeableProductCarousel = () => {
  const images = [
    "/images/ProductPage/simpleSat.png",
    "/images/ProductPage/simpleInd.png",
    "/images/ProductPage/simpleHyd.png",
    // Add more image paths as needed
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    fade: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="grid grid-rows-10 rounded-xl  mx-4 bg-yellow-300 bg-opacity-90">
      <div className="row-span-1">
        <h2 className="text-center py-2 px-4 font-bold text-3xl rounded-t-xl bg-white text-carpetMoss">
          TYPES
        </h2>
      </div>
      <div className="row-span-9 py-2">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="slide-item h-full">
              <div className="slide-content flex items-center justify-center h-full">
                <Image
                  src={image}
                  width={150}
                  height={150}
                  className="object-cover my-2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SwipeableProductCarousel;
