import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronCircleRight,
  FaChevronRight,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductName,
  selectProductTypes,
  selectSelectedType,
  selectTypeImages,
  setProductQualities,
  setSelectedQuality,
} from "@/Redux/Slices/productDetailsSlice";
import { useRouter } from "next/navigation";
import { addToCart, setProductType } from "@/Redux/Slices/cartSlice";

const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className={` py-6 relative cursor-pointer ${
      currentSlide === 0 ? "invisible" : ""
    }`}
    onClick={() => onClick()}
  >
    <FaChevronUp className="absolute text-4xl opacity-30 inset-0 mx-auto my-auto" />
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className={` relative py-6 cursor-pointer ${
      currentSlide === slideCount - 1 ? "invisible" : ""
    }`}
    onClick={() => onClick()}
  >
    <FaChevronDown className="absolute text-4xl opacity-30 inset-0 mx-auto my-auto" />
  </div>
);

const SwipeableProductCarousel = () => {
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
    // Assuming you want to set the first quality as the selected quality

    dispatch(setProductQualities(type.qualities));
    dispatch(setProductType(type.type));

    // Redirect to "/quality" after updating the reducers
    router.push("/quality");
  };

  return (
    <div className=" rounded-xl  mx-4 bg-yellow-300 bg-opacity-90">
      <h2 className="text-center py-2 px-4 font-bold text-3xl rounded-t-xl bg-white text-carpetMoss">
        TYPES
      </h2>
      <div className="">
        <Slider {...settings} ref={sliderRef}>
          {productTypes?.map((type, index) => (
            <div
              key={index}
              className="relative items-center slide-item h-full"
            >
              <div className="slide-content flex items-center justify-center h-full mx-2">
                <Image
                  src={type.typeImage}
                  width={150}
                  height={150}
                  className="object-cover cursor-pointer my-2"
                  alt={`Slide ${index + 1}`}
                  onClick={() => handleUpdateData(type)}
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
