import React from "react";
import { BsArrowRight } from "react-icons/bs";


const NextButton = ({title}) => {
    return (
      <div className="flex justify-center items-center py-2">
        <button className="relative px-4 py-2 line-clamp-3 rounded-full bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-12 w-4/5 md:h-16 md:w-96 font-semibold">
          <span className="text-2xl">{title ? title : "Next"}</span>
          <span className="absolute top-3 right-4 md:top-5">
            <BsArrowRight className="text-2xl" />
          </span>
        </button>
      </div>
    );
};

export default NextButton;
