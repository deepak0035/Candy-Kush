import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoMdClose, IoMdHelpCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setProductTypes } from "@/Redux/Slices/productDetailsSlice";
import { setProductName } from "@/Redux/Slices/cartSlice";
import InfoModal from "@/components/Popup/InfoModal";

const Product = ({ product, comingsoon, lang, gotocategory, prerolled }) => {
  const { name, productImage, types } = product;
  const [showDetails, setShowDetails] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const modalRef = useRef(null);

  const handleUpdateData = () => {
    if (name) {
      dispatch(setProductTypes(types));
      dispatch(setProductName(name));
      const route = `/${lang}/types`;
      router.push(route, undefined, { locale: lang });
    }
  };

  const toggleDetailsModal = () => {
    setShowDetails((prev) => !prev);
  };

  const openDetailsModal = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent div
    setShowDetails(true);
  };

  const closeDetailsModal = () => {
    setShowDetails(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeDetailsModal();
      }
    }

    // Add event listener when modal is shown
    if (showDetails) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when modal is hidden
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDetails]);

  return (
    <div className="relative">
      {!name ? (
        <div className="grid grid-cols-3 text-gray-400 gap-4 bg-white rounded-2xl border-2 border-gray-300 h-36 px-4 place-items-center">
          <h1 className="col-span-full text-4xl font-semibold tracking-widest">
            {comingsoon}
          </h1>
        </div>
      ) : (
        <div
          className="grid grid-cols-3 text-carpetMoss gap-4 bg-white rounded-2xl shadow-xl h-36 px-4 place-items-center cursor-pointer border-2 border-carpetMoss"
          onClick={handleUpdateData}
        >
          <div className="col-span-1">
            <h2 className="text-4xl font-medium" >{name}</h2>
          </div>
          <div className="col-span-1 relative w-full h-36 overflow-hidden ">
            {productImage.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={60}
                height={60}
                alt={`Image ${index}`}
                className={`absolute top-1.5 left-32 transform origin-bottom ${
                  index === 0
                    ? "z-10"
                    : index % 2 === 0
                    ? "-rotate-[20deg]"
                    : "rotate-[20deg]"
                }`}
                preload
                loading="lazy"
              />
            ))}
          </div>
          <div className="col-span-1 flex justify-between items-center">
            <span className="text-2xl">{gotocategory}</span>
            <span>
              <IoIosArrowForward className="text-2xl" />
            </span>
          </div>
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={openDetailsModal}
          >
            <IoMdHelpCircle className="text-gray-500 text-5xl z-10" />
          </div>
        </div>
      )}
      <InfoModal
        showDetails={showDetails}
        modalRef={modalRef}
        closeDetailsModal={closeDetailsModal}
        description={prerolled}
      />
    </div>
  );
};

export default Product;
