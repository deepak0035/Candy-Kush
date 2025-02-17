'use client'
// Page.js
import Slideshow from "@/components/Welcome-SlideShow/SlideShow";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { motion } from "framer-motion";
import productData from "/data.json";
import Image from 'next/image';
import { useQuery } from 'react-query';
import { getSliderImages } from "@/lib/helper";

const Page = () =>
{


  return (
    <div className="w-screen min-h-[1920px] max-w-[1080px] overflow-x-hidden flex flex-col justify-center backdrop-blur-xl bg-gray-100">
      <Slideshow images={productData.SlideShow} />
      <div className="flex-grow flex items-center justify-center  px-6  ">
        <div className="grid grid-cols-2 w-full place-items-center">
          <motion.div
            className="col-span-1 flex items-center justify-center" 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, duration: 1 }}
          >
            <Link
              href={"/products"}
              className="flex flex-col justify-center items-center px-4 py-1 line-clamp-3 rounded-lg bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-24 w-72 md:h-36 md:w-[30rem] font-semibold"
            >
              <span className="text-3xl">Click here to</span>
              <span className="text-4xl">BUY NOW!</span>
            </Link>
          </motion.div>

          <motion.div
            className="col-span-1 flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, duration: 1 }}
          >
            <Link
              href={"/languages"}
              className="flex flex-col justify-center items-center px-4 py-1 border-solid border-2 border-carpetMoss line-clamp-3 rounded-lg text-carpetMoss text-center h-24 w-72 md:h-36 md:w-[30rem] font-semibold text-3xl"
            >
              Select Languages
              <span className="mt-1">
                <CiGlobe className=" text-4xl md:text-6xl" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;

