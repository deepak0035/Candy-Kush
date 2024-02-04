import React from "react";
import Image from "next/image";
import { HiCheck } from "react-icons/hi2";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="flex justify-center items-center">
      <div  className="bg-white p-1 shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center">
        <HiCheck className="text-8xl font-bold text-carpetMoss" />
      </div>
    </div>
  );
};

export default ThankYou;
