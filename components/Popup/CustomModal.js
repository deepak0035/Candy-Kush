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

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 10);
};

const CustomModal = ({ open, onClose, parentWidth, sizes }) => {
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

  const handleUpdateData = () =>
  {
    const productId = generateRandomId();


    const item = {
      productId: productId,
      productName: productName,
      productType: productType,
      productQuality: productQuality,
      productPrice: productPrice,
      productSize: productSize,
      productImage: productImage,
      productQuantity: 1,
    };
    dispatch(addToCart(item));


    // Use the cartItems directly without useSelector inside this function

    onClose();
    // Redirect to "/quality" after updating the reducers
    router.push("/check-out");
  };

  const modalStyle = {
    width: parentWidth || "auto", // Set the width based on the prop or default to "auto"
  };

  return (
    <div
      className={`custom-modal-overlay rounded-t-[3rem] bg-white ${
        open ? "visible" : ""
      }`}
    >
      <div className="custom-modal" style={modalStyle}>
        <h2 className="text-center py-3 px-4 font-bold text-3xl rounded-t-[3rem]  text-white bg-carpetMoss">
          SIZE
        </h2>
        <div className="bg-white flex justify-evenly items-end py-2">
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
        <div className="flex justify-center items-center h-full">
          <button
            onClick={handleUpdateData}
            className="relative px-4 py-2 line-clamp-3 rounded-full bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-12 w-4/5 md:h-16 md:w-96 font-semibold"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
