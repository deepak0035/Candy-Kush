import React from "react";
import PropTypes from "prop-types";
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
    <div className="slideshow-wrapper">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide-item">
            <div className="slide-content">
              <Image
                src={image}
                width={500}
                height={500}
                className="object-fit"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Slideshow;
