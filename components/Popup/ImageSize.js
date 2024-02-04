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
        <div className="absolute top-0 right-0 p-2">
          <div className="bg-white p-1 shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center">
            <HiCheck className="text-3xl font-bold text-carpetMoss" />
          </div>
        </div>
      )}

      <div
        className={`flex flex-col items-center justify-end ${
          isSelected ? "bg-carpetMoss shadow-lg rounded-xl h-full w-full" : ""
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
          className={`text-center px-4 text-carpetMoss ${
            isSelected ? "text-white font-medium" : ""
          }`}
        >
          {size}
        </h2>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          className="text-pottBlack px-1 font-medium"
        />{" "}
      </div>
    </div>
  );
};

export default ImageSize;
