// components/Slideshow.js
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="max-w-screen-lg mx-auto">
          <Image
            src={image}
            width={672}
            height={880}
            className="w-full h-auto"
            alt="Picture of the author"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;
