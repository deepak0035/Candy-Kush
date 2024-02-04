import React from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import CurrencyFormat from "react-currency-format";


import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/Redux/Slices/cartSlice";

const Product = ({ product }) => {
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

  const handleIncrement = () => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = () => {
    if (productQuantity > 1) {
      dispatch(decrementQuantity(productId));
    }
  };

  // Mapping of size abbreviations
  const sizeAbbreviation = {
    King: " K",
    Normal: " N",
    Small: " S",
  };

  // Calculate the total price based on quantity
  const totalPrice = productQuantity * productPrice;

  return (
    <div className="grid grid-cols-6 gap-4 backdrop-blur-md rounded-2xl shadow-[0_1px_2px_rgb(0,0,0,0.5)] border px-4 py-4">
      <div className="col-span-2 flex justify-center items-center">
        <Image
          src={productImage}
          width={35}
          height={35}
          alt="Picture of the author"
          className=""
        />
      </div>
      <div className="col-span-4 flex flex-col justify-start items-start space-y-2">
        <div>
          <h2 className="text-xl font-medium text-carpetMoss">{productName}</h2>
        </div>
        <div className="flex justify-evenly space-x-2 items-center text-xs">
          <p className="text-gray-500">
            Type: <span className="text-pottBlack">{productType}</span>
          </p>
          <p className="text-gray-500">
            Quality: <span className="text-pottBlack">{productQuality}</span>
          </p>
          <p className="text-gray-500">
            Size:
            <span className="text-pottBlack">
              {sizeAbbreviation[productSize]}
            </span>
          </p>
        </div>
        <div className="flex justify-evenly items-center space-x-6 text-base">
          <div className="flex justify-evenly items-center space-x-3">
            <span
              className="bg-white p-1 shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center"
              onClick={handleDecrement}
            >
              <FaMinus className="text-lg text-carpetMoss" />
            </span>
            <span>{productQuantity}</span>
            <span
              className="bg-white p-1 shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center"
              onClick={handleIncrement}
            >
              <FaPlus className="text-lg text-carpetMoss" />
            </span>
            <span
              className="bg-white p-1 shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center"
              onClick={handleRemoveFromCart}
            >
              <MdDeleteOutline className="text-lg text-red-700" />
            </span>
          </div>
          <p className="text-gray-500">
            Price:
            <CurrencyFormat
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              className="text-pottBlack px-1"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
