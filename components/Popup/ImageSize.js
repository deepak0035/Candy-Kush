import React from "react";
import Image from "next/image";
import { HiCheck } from "react-icons/hi2";
import CurrencyFormat from "react-currency-format";


const ImageSize = ({ image, name, price, size, handleSetData, isSelected }) => {
  let width = 65;
  let height = 65;

  // Set width and height based on the size
  if (size === "Small") {
    width = 60;
    height = 60;
  } else if (size === "Normal") {
    width = 65;
    height = 65;
  } else if (size === "King") {
    width = 70;
    height = 70;
  }

  const handleClick = () => {
    handleSetData(size, price, image);
  };

  return (
    <div className={`relative h-64 w-32 flex justify-center items-end`}>
      {isSelected && (
        <div className="absolute top-0 right-0 p-2 z-10">
          <div className="bg-white border-solid border-4  p-1  rounded-full flex justify-center items-center">
            <HiCheck className="text-2xl font-bold text-carpetMoss " />
          </div>
        </div>
      )}

      <div
        className={`flex flex-col items-center justify-end ${
          isSelected
            ? "w-full h-full rounded-xl border-solid border-2 border-opacity-50 border-carpetMoss backdrop-blur-md "
            : ""
        }`}
      >
        <Image
          src={image}
          width={width}
          height={height}
          className="object-cover cursor-pointer"
          onClick={handleClick}
        />
        <h2
          className={`text-center px-4 pt-1 text-carpetMoss ${
            isSelected ? "text-black font-medium" : ""
          }`}
        >
          {size}
        </h2>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"฿"}
          className="text-pottBlack px-1 font-medium"
        />
      </div>
    </div>
  );
};

export default ImageSize;
