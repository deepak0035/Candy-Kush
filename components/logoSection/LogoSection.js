import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import Image from "next/image";
import logo from "@/public/images/logo.png";

const LogoSection = ({cart}) => {

  return (
    <>
      <div className="grid grid-cols-3 items-center justify-center py-2 gap-4">
        {/* First Column: Back Icon */}
        <button className="flex items-center justify-start">
          <IoIosArrowBack className="text-carpetMoss text-5xl md:text-6xl" />
        </button>
        {/* Second Column: Logo */}
        <div className="col-span-1 flex items-center justify-center">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        {/* Third Column: Cart Icon */}
        <button
          className={`${cart ? "flex items-center justify-end" : "hidden"}`}
        >
          <IoCartOutline className="text-carpetMoss text-5xl md:text-6xl" />
        </button>
      </div>
    </>
  );
};

export default LogoSection;
