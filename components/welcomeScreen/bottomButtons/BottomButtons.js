import React from "react";
import { CiGlobe } from "react-icons/ci";

const BottomButtons = () => {
  return (
    <div className="grid grid-cols-6 h-full items-center justify-center py-2 px-2 gap-2">
      <div className="col-span-4 flex items-center justify-center">
        <button className="flex flex-col justify-center items-center px-4 py-1 line-clamp-3 rounded-lg bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-24 w-72 md:h-24 md:w-96 font-semibold">
          <span className="text-lg">Click here to </span>
          <span className="text-2xl">BUY NOW!</span>
        </button>
      </div>

      <div className="col-span-2 flex items-center justify-center ">
        <button className="flex flex-col justify-center items-center px-4 py-1 border-solid border-2 border-carpetMoss line-clamp-3 rounded-lg text-carpetMoss text-center h-24 w-72 md:h-24 md:w-96 font-semibold">
          Select Languages
          <span className="mt-1">
            <CiGlobe className=" text-4xl md:text-3xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomButtons;
