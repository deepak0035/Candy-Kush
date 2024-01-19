'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const SwipeableProductCarousel = () => {
  const images = [
    "/images/welcome1.png",
    "/images/welcome2.png",
    "/images/welcome3.png",
    // Add more image paths as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slideshow-wrapper">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide-item">
            <div className="slide-content">
              <Image
                src={image}
                width={100}
                height={100}
                className=""
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SwipeableProductCarousel;
