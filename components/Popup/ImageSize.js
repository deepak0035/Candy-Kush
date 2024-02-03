import React from "react";
import Image from "next/image";

const ImageSize = ({ image, name, price, size }) => {
  let width = 65;
  let height = 65;

  // Set width and height based on the size
  if (size === "Small") {
    width = 60;
    height = 60;
  } else if (size === "Normal") {
    // Normal size has a width and height of 65
    width = 65;
    height = 65;
  } else if (size === "King") {
    width = 70;
    height = 70;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={image}
        width={width}
        height={height}
        className="object-cover"
      />
      <h2 className="text-center px-4 text-base text-carpetMoss">{size}</h2>
      <p>{price}</p>
    </div>
  );
};

export default ImageSize;
