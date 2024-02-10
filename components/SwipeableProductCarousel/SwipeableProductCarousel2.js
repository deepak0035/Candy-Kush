import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductQualities,
  selectedQuality,
  setSelectedQuality,
} from "@/Redux/Slices/productDetailsSlice";
import { addToCart, setProductQuality } from "@/Redux/Slices/cartSlice";

const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  <div className="absolute left-1 top-0 h-full w-6">
    <div
      className={` py-6 flex justify-center items-center  cursor-pointer ${
        currentSlide === 0 ? "invisible" : ""
      }`}
      onClick={() => onClick()}
    >
      <FaChevronLeft className="absolute text-4xl opacity-30 z-10 inset-0 m-auto" />
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
        className="absolute text-4xl opacity-30 z-10 inset-0 m-auto"
      />
    </div>
  </div>
);

const SwipeableProductCarousel = ({ onOpen, setSizes, quality }) => {
  const dispatch = useDispatch();

  const images = [
    "/images/NormalSize/topSativa-n.png",
    "/images/NormalSize/outdoorSativa-n.png",
    "/images/NormalSize/indoorSativa-n.png",
    // Add more image paths as needed
  ];

  const productQuality = useSelector(selectProductQualities);

  const handleUpdateData = (quality) => {
    setSizes(quality.sizes);
    dispatch(setProductQuality(quality.quality));

    onOpen();
  };

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
    <div className="rounded-xl mx-4 shadow-[0_0px_5px_rgb(0,0,0.5,0.3)] ">
      <h2 className=" text-center py-2 px-4 font-bold text-3xl rounded-t-xl bg-carpetMoss text-white">
        {quality}
      </h2>
      <div className=" bg-gradient-to-t from-carpetMoss/40 to-white/30 bg-opacity-50 backdrop-blur-md rounded-b-xl">
        <Slider {...settings} ref={sliderRef}>
          {productQuality.map((quality, index) => (
            <div
              key={index}
              className="relative items-center slide-item h-full"
            >
              <div className="py-5" />
              <div className="slide-content flex items-center justify-center h-full mx-2">
                <Image
                  src={quality.qualityImage}
                  width={150}
                  height={150}
                  className="object-cover cursor-pointer z-10 my-2"
                  onClick={() => handleUpdateData(quality)}
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
