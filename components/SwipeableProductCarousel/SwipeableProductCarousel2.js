import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuestionCircle,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductQualities,
  selectedQuality,
  setSelectedQuality,
} from "@/Redux/Slices/productDetailsSlice";
import { addToCart, setProductQuality } from "@/Redux/Slices/cartSlice";
import { motion } from "framer-motion";
import { IoMdClose, IoMdHelpCircle } from "react-icons/io";
import InfoModal from "../Popup/InfoModal";

const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className="absolute left-2 top-0 h-full w-6 "
    style={{ animation: "moveRightLeft 1.5s infinite", zIndex: 1 }}
  >
    <div
      className={` py-6 flex justify-center items-center  cursor-pointer ${
        currentSlide === 0 ? "invisible" : ""
      }`}
    >
      <FaChevronLeft
        className="absolute text-5xl opacity-30  inset-0 m-auto"
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
    className="absolute top-0 right-8 h-full w-6 "
    style={{ animation: "moveRightLeft 1.5s infinite", zIndex: 1 }}
  >
    <div
      className={` py-6 flex justify-center items-center  cursor-pointer ${
        currentSlide === slideCount - 1 ? "invisible" : ""
      }`}
    >
      <FaChevronRight
        onClick={() => {
          if (currentSlide !== slideCount - 1) {
            onClick();
          }
        }}
        className="absolute text-5xl opacity-30 inset-0 m-auto"
      />
    </div>
  </div>
);



const SwipeableProductCarousel = ({ onOpen, setSizes, quality, details }) => {
  const [productDetail, setProductDetail] = useState("");
    const modalRef = useRef(null);

  const dispatch = useDispatch();

  const images = [
    "/images/NormalSize/topSativa-n.png",
    "/images/NormalSize/outdoorSativa-n.png",
    "/images/NormalSize/indoorSativa-n.png",
    // Add more image paths as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const openModal = async (quality) => {
    switch (quality) {
      case "Top":
        await setProductDetail(details.Top);

        break;
      case "Indoor":
        await setProductDetail(details.Indoor);

        break;
      case "Outdoor":
        await setProductDetail(details.Outdoor);

        break;
      default:
        console.log(`Sorry, we are out of ${quality}.`);
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative rounded-xl mx-8 shadow-[0_0px_5px_rgb(0,0,0.5,0.3)] my-12">
      <h2 className=" text-center py-6 px-4 font-bold text-6xl rounded-t-xl bg-carpetMoss text-white">
        {quality}
      </h2>
      <div className=" min-h-[60rem] max-h-[33rem] bg-gradient-to-t from-carpetMoss/40 to-white/30 bg-opacity-50 backdrop-blur-md rounded-b-xl">
        <Slider {...settings} ref={sliderRef}>
          {productQuality.map((quality, index) => (
            <div
              key={index}
              className="relative items-center slide-item h-full"
            >
              <div className="py-5" />
              <div className="absolute top-12 right-12 cursor-pointer">
                <IoMdHelpCircle
                  className="text-gray-500 text-6xl z-40 cursor-pointer"
                  onClick={() => openModal(quality.quality)}
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
                    src={quality.qualityImage}
                    width={280}
                    height={280}
                    className="object-cover cursor-pointer z-10 my-9"
                    onClick={() => handleUpdateData(quality)}
                    alt={`Slide ${index + 1}`}
                    loading="lazy" // Adding lazy loading
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
