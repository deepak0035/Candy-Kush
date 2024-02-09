'use client'
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductTypes,
  setProductQualities,
} from "@/Redux/Slices/productDetailsSlice";
import { useRouter } from "next/navigation";
import { addToCart, setProductType } from "@/Redux/Slices/cartSlice";

const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  <div className="absolute h-8 w-full ">
    <div
      className={` py-6 relative cursor-pointer ${
        currentSlide === 0 ? "invisible" : ""
      }`}
      onClick={() => onClick()}
    >
      <FaChevronUp className="absolute text-4xl opacity-30 z-10 inset-0 m-auto" />
    </div>
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => (
  <div className="absolute bottom-4 h-8 w-full">
    <div
      className={` relative py-6 cursor-pointer ${
        currentSlide === slideCount - 1 ? "invisible" : ""
      }`}
      onClick={() => onClick()}
    >
      <FaChevronDown className="absolute text-4xl opacity-30 z-10 inset-0 m-auto" />
    </div>
  </div>
);

const SwipeableProductCarousel = ({types}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const productTypes = useSelector(selectProductTypes);

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

  const handleUpdateData = (type) => {
    dispatch(setProductQualities(type.qualities));
    dispatch(setProductType(type.type));
    router.push("/quality");
  };

  return (
    <div className="rounded-xl mx-4 shadow-[0_0px_5px_rgb(0,0,0.5,0.3)] ">
      <h2 className="text-center py-2 px-4 font-bold text-3xl rounded-t-xl bg-carpetMoss text-white">
        {types}
      </h2>
      <div className=" bg-gradient-to-t from-carpetMoss/40 to-white/30 bg-opacity-50 backdrop-blur-md rounded-b-xl">
        <Slider {...settings} ref={sliderRef}>
          {productTypes?.map((type, index) => (
            <div
              key={index}
              className="relative items-center slide-item h-full"
            >
              <div className="py-5" />
              <div className="slide-content flex items-center justify-center h-full mx-2">
                <Image
                  src={type.typeImage}
                  width={150}
                  height={150}
                  className="object-cover cursor-pointer z-10 my-2"
                  alt={`Slide ${index + 1}`}
                  onClick={() => handleUpdateData(type)}
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
