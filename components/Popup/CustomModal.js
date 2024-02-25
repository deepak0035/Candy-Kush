import React, { useState } from "react";
import ImageSize from "./ImageSize";
import "./CustomModal.css"; // Create a CSS file for styling
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  addToCheckout,
  selectCartItems,
  selectProductName,
  selectProductType,
  selectedProductQuality,
} from "@/Redux/Slices/cartSlice";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // Import motion from Framer Motion

const CustomModal = ({
  open,
  onClose,
  parentWidth,
  sizes,
  size,
  addtocart,
  lang,
}) => {
  const dropIn = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3, // Shortened duration for faster animation
        type: "spring", // Changed type to spring for smoother animation
        damping: 20, // Reduced damping for a less stiff motion
        stiffness: 200, // Reduced stiffness for a more elastic motion
      },
    },
    exit: {
      y: "100vh", // Move modal up during exit animation
      opacity: 0,
      transition: {
        duration: 0.5, // Keep exit duration longer for a smoother exit
        type: "spring", // Maintain spring type for consistency
        damping: 20,
        stiffness: 200,
      },
    },
  };

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 10);
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [productSize, setProductSize] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();

  const productName = useSelector(selectProductName);
  const productType = useSelector(selectProductType);
  const productQuality = useSelector(selectedProductQuality);

  const handleSetData = (size, price, image) => {
    setProductImage(image);
    setProductPrice(price);
    setProductSize(size);
    setSelectedSize(size); // Update the selectedSize in the modal
  };

  const handleUpdateData = () => {

    const item = {
      productName: productName,
      productType: productType,
      productQuality: productQuality,
      productPrice: productPrice,
      productSize: productSize,
      productImage: productImage,
      productQuantity: 1,
    };
    dispatch(addToCart(item));

    onClose();
    const route = `/${lang}/check-out`;

    router.push(route, undefined, {
      locale: lang,
    });
  };

  const modalStyle = {
    width: parentWidth || "auto",
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed m-auto bottom-0 right-0 left-0 z-50 w-full max-w-[28rem] min-h-screen flex justify-center items-end"
          initial={{ backdropFilter: "blur(0px)" }} // Apply initial blur of 0px
          animate={{ backdropFilter: "blur(8px)" }} // Apply blur when modal is open
          exit={{ backdropFilter: "blur(0px)" }} // Remove blur when modal is closing
          onClick={onClose} // Close the modal when clicking outside of it
        >
          <motion.div
            className="custom-modal flex flex-col justify-center h-full"
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="text-center py-3 px-4 font-bold text-3xl rounded-t-[3rem]  text-white bg-carpetMoss">
              {size}
            </h2>
            <div className="bg-white flex justify-evenly items-end pt-4">
              {sizes.map(({ i, imgUrl, width, height, name, price, size }) => (
                <ImageSize
                  key={i}
                  image={imgUrl}
                  width={width}
                  height={height}
                  name={name}
                  price={price}
                  size={size}
                  isSelected={selectedSize === size}
                  handleSetData={handleSetData}
                />
              ))}
            </div>
            <div className="flex justify-center items-center py-2 h-full bg-white">
              <button
                onClick={handleUpdateData}
                className="relative px-4 py-2  line-clamp-3 rounded-full bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-12 w-4/5 md:h-16 md:w-96 font-semibold"
              >
                {addtocart}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
