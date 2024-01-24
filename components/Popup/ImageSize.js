import React from "react";
import Image from "next/image";

const ImageSize = ({ image, width, height, name, price, size }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={image}
        width={width}
        height={height}
        className="object-cover"
      />
      <h2 className="text-center px-4 text-base  text-carpetMoss">
        {size}
      </h2>
      <p>{price}</p>
    </div>
  );
};

export default ImageSize;
