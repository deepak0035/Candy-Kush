"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductTypes,
  setProductQualities,
} from "@/Redux/Slices/productDetailsSlice";
import { useRouter } from "next/navigation";
import { IoMdClose, IoMdHelpCircle } from "react-icons/io";
import { setProductType } from "@/Redux/Slices/cartSlice";
import InfoModal from "../Popup/InfoModal";

const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className="absolute top-1 h-8 w-full "
    style={{ animation: "moveUpDown 1.5s infinite", zIndex: 1 }}
  >
    <div
      className={`py-6 relative cursor-pointer ${
        currentSlide === 0 ? "invisible" : ""
      }`}
    >
      <FaChevronUp
        className="absolute text-5xl opacity-30 z-10 inset-0 m-auto"
        onClick={() => {
          if (currentSlide !== 0) {
            onClick();
          }
        }}
      />
    </div>
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className="absolute bottom-1 h-8 w-full "
    style={{ animation: "moveUpDown 1.5s infinite" }}
  >
    <div
      className={`relative py-6 cursor-pointer ${
        currentSlide === slideCount - 1 ? "invisible" : ""
      }`}
    >
      <FaChevronDown
        className="absolute text-5xl opacity-30 z-10 inset-0 m-auto"
        onClick={() => {
          if (currentSlide !== slideCount - 1) {
            onClick();
          }
        }}
      />
    </div>
  </div>
);



const SwipeableProductCarousel = ({ types, lang, details }) =>
{
    const [productDetail, setProductDetail] = useState("");
  const modalRef = useRef(null);

  const dispatch = useDispatch();
  const router = useRouter();
  const productTypes = useSelector(selectProductTypes);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleUpdateData = (type) => {
    dispatch(setProductQualities(type.qualities));
    dispatch(setProductType(type.type));
    const route = `/${lang}/quality`;

    router.push(route, undefined, {
      locale: lang,
    });
  };

  const openModal = async (type) =>
  {
        switch (type) {
      case "Sativa":
        await setProductDetail(details.Sativa);

        break;
      case "Indica":
        await setProductDetail(details.Indica);

        break;
      case "Hybrid":
        await setProductDetail(details.Hybrid);

        break;
      default:
        console.log(`Sorry, we are out of ${type}.`);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative rounded-xl mx-8 shadow-[0_0px_5px_rgb(0,0,0.5,0.3)] my-12">
      <h2 className="text-center py-6 px-4 font-bold text-6xl rounded-t-xl bg-carpetMoss text-white">
        {types}
      </h2>
      <div className="min-h-[60rem] max-h-[33rem] bg-gradient-to-t from-carpetMoss/40 to-white/30 bg-opacity-50 backdrop-blur-md rounded-b-xl">
        <Slider {...settings} ref={sliderRef}>
          {productTypes?.map((type, index) => (
            <div
              key={index}
              className="relative items-center slide-item h-full"
            >
              <div className="py-5" />
              <div className="absolute top-12 right-12 cursor-pointer">
                <IoMdHelpCircle
                  className="text-gray-500 text-5xl z-20 cursor-pointer"
                  onClick={() => openModal(type.type)}
                />
              </div>
              <div className="slide-content flex items-center justify-center h-full mx-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    scale: currentSlide === index ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src={type.typeImage}
                    width={280}
                    height={240}
                    className="object-cover cursor-pointer z-10 my-9"
                    alt={`Slide ${index + 1}`}
                    onClick={() => handleUpdateData(type)}
                    loading="lazy"
                    preload
                  />
                </motion.div>
              </div>
              <div className="py-5" />
            </div>
          ))}
        </Slider>
      </div>

      <InfoModal
        showDetails={showModal}
        modalRef={modalRef}
        closeDetailsModal={closeModal}
        description={productDetail}
      />
    </div>
  );
};

export default SwipeableProductCarousel;
