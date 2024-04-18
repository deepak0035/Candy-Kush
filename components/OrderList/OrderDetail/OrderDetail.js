import React from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import CurrencyFormat from "react-currency-format";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/Redux/Slices/cartSlice";

const Product = ({ product, quality, size, price, type }) => {
  const dispatch = useDispatch();

  const {
    productId,
    productName,
    productType,
    productQuality,
    productPrice,
    productSize,
    productImage,
    productQuantity,
  } = product;

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrement = () =>
  {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = () => {
    if (productQuantity > 1) {
      dispatch(decrementQuantity(productId));
    }
  };

  const sizeAbbreviation = {
    King: " K",
    Normal: " N",
    Small: " S",
  };

  const totalPrice = productQuantity * productPrice;

  return (
    <div className="grid grid-cols-6 gap-4 backdrop-blur-md rounded-2xl shadow-[0_1px_2px_rgb(0,0,0,0.5)] border px-4 py-4">
      <div className="col-span-2 flex justify-center items-center">
        <motion.div
          className="image-container"
          animate={{
            scale: [1, 1.03, 0.98, 1], // Minor scaling effect
            transition: { duration: 0.5, repeat: Infinity }, // Infinitely repeat the animation
          }}
        >
          <Image
            src={productImage}
            width={65}
            height={35}
            alt="Product Image"
            className=""
            preload
            loading="lazy"
          />
        </motion.div>
      </div>
      <div className="col-span-4 flex flex-col justify-center items-start space-y-4">
        <div>
          <h2 className="text-4xl font-medium text-carpetMoss">
            {productName}
          </h2>
        </div>
        <div className="flex justify-evenly space-x-1 items-center text-2xl">
          <p className="text-gray-500">
            {type}: <span className="text-pottBlack">{productType}</span>
          </p>
          <p className="text-gray-500">
            {quality}: <span className="text-pottBlack">{productQuality}</span>
          </p>
          <p className="text-gray-500">
            {size}:
            <span className="text-pottBlack">
              {sizeAbbreviation[productSize]}
            </span>
          </p>
        </div>
        <div className="flex justify-evenly items-center space-x-3 text-base">
          <div className="flex justify-evenly items-center space-x-4">
            <motion.span
              className="bg-white p-1 shadow-[0_1px_5px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center cursor-pointer"
              onClick={handleDecrement}
              whileTap={{ scale: 0.9 }}
            >
              <FaMinus className="text-3xl text-carpetMoss" />
            </motion.span>
            <span className="text-3xl">{productQuantity}</span>
            <motion.span
              className="bg-white p-1 shadow-[0_1px_5px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center cursor-pointer"
              whileTap={{ scale: 0.9 }}
              onClick={handleIncrement}
            >
              <FaPlus className="text-3xl text-carpetMoss" />
            </motion.span>
            <motion.span
              className="bg-white p-1 shadow-[0_1px_5px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center cursor-pointer"
              onClick={handleRemoveFromCart}
              whileTap={{ scale: 0.9 }}
            >
              <MdDeleteOutline className="text-3xl text-red-700" />
            </motion.span>
          </div>
          <p className="text-gray-500 text-3xl ">
            {price}:
            <CurrencyFormat
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"฿"}
              className="text-pottBlack px-1"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
