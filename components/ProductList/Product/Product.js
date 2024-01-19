import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";


const Product = () => {
  return (
    <div className="grid grid-cols-7 gap-4 bg-white rounded-2xl shadow-xl h-24 px-4 place-items-center	">
      <div className="col-span-2">
        <h2 className="text-base">Pre-rolled</h2>
      </div>
      <div className="col-span-3 relative w-full h-24 overflow-hidden  ">
        <Image
          src={"/images/bag1.png"}
          width={120}
          height={120}
          alt="Picture of the author"
          className="absolute -top-12 left-1 transform origin-bottom z-10"
        />
        <Image
          src={"/images/bag2.png"}
          width={120}
          height={120}
          alt="Picture of the author"
          className="absolute -top-12 left-1 transform -rotate-[16deg] origin-bottom"
        />
        <Image
          src={"/images/bag3.png"}
          width={120}
          height={120}
          alt="Picture of the author"
          className="absolute -top-12 left-1 transform rotate-[16deg] origin-bottom"
        />
      </div>
      <div className="col-span-2 flex justify-between items-center">
        <span className="text-xs">Go to Category</span>
        <span>
          <IoIosArrowForward className="text-xs" />
        </span>
      </div>
    </div>
  );
};

export default Product;
