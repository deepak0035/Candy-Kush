import React, { useState } from "react";
import ImageSize from "./ImageSize";
import "./CustomModal.css"; // Create a CSS file for styling

const CustomModal = ({ open, onClose, parentWidth, children, sizes }) => {
  const images = [
    {
      image: "/images/Size/outdoorSativa-s.png",
      width: 60,
      height: 60,
      name: "OutdoorSativa",
      price: "20$",
      size: "Small",
    },
    {
      image: "/images/Size/outdoorSativa-n.png",
      width: 65,
      height: 65,
      name: "OutdoorSativa",
      price: "25$",
      size: "Normal",
    },
    {
      image: "/images/Size/outdoorSativa-k.png",
      width: 70,
      height: 70,
      name: "OutdoorSativa",
      price: "30$",
      size: "King",
    },
  ];

  console.log(sizes)

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
              image={imgUrl}
              width={width}
              height={height}
              name={name}
              price={price}
              size={size}
            />
          ))}
        </div>
        <div className="flex justify-center items-center h-full">
          <button
          onClick={onClose}
            className="relative px-4 py-2 line-clamp-3 rounded-full bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-12 w-4/5 md:h-16 md:w-96 font-semibold">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
