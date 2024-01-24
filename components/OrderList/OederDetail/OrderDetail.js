import React from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Product = () => {
  return (
    <div className="grid grid-cols-6 gap-4  backdrop-blur-md  rounded-2xl shadow-[0_1px_2px_rgb(0,0,0,0.5)] border px-4 py-4">
      <div className="col-span-2 flex justify-center items-center">
        <Image
          src={"/images/ProductPage/simpleInd.png"}
          width={35}
          height={35}
          alt="Picture of the author"
          className=""
        />
      </div>
      <div className="col-span-4 flex flex-col justify-start items-start space-y-2">
        <div>
          <h2 className="text-xl font-medium text-carpetMoss">Pre-rolled</h2>
        </div>
        <div className="flex justify-evenly space-x-2 items-center text-xs">
          <p className="text-gray-400">
            Type: <span className="text-pottBlack">Sativa</span>
          </p>
          <p className="text-gray-400">
            Quality: <span className="text-pottBlack">Outdoor</span>
          </p>
          <p className="text-gray-400">
            Size: <span className="text-pottBlack">S</span>
          </p>
        </div>
        <div className=" flex justify-evenly items-center space-x-6 text-base">
          <div className=" flex justify-evenly items-center space-x-4">
            <span className="bg-white p-1 shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center">
              <FaMinus className="text-lg text-carpetMoss" />
            </span>
            <span>2</span>
            <span className="bg-white p-1 shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center">
              <FaPlus className="text-lg text-carpetMoss" />
            </span>
          </div>
          <p className="text-gray-400">
            Price: <span className="text-pottBlack">20$</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
