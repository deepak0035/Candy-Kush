<div className="flex flex-col justify-center items-center">
  <div className="flex justify-center items-center">
    <h1 className=" font-westcoastline text-7xl md:text-9xl text-carpetMoss">
      WELCOME
    </h1>
    <button
      onClick={languageBtn}
      className="absolute top-10 right-6 md:top-14 "
    >
      <CiGlobe className="text-gray-600 text-4xl md:text-6xl" />
    </button>
  </div>
  <div className="bg-smoke3 bg-no-repeat bg-cover overflow-hidden">
    <Image
      src={productImg}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  </div>
  <div>
    <button className="inline-block px-4 py-2 line-clamp-3 rounded-full bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-12 w-72 md:h-16 md:w-96 font-semibold">
      BUY NOW!
    </button>
  </div>
</div>;

("use client");
import { CiGlobe } from "react-icons/ci";
import Image from "next/image";
import Slideshow from "@/components/welcomeScreen/slideshow/SlideShow";

const page = () => {
  const languageBtn = () => {
    console.log("language");
  };

  const buyNowBtn = () => {
    console.log("buyNow");
  };

  const images = [
    "images/welcome1.png",
    "images/welcome2.png",
    "images/welcome3.png",
    // Add more image paths as needed
  ];

  return (
    <div className="w-full max-w-2xl min-h-screen">
      <div className="flex flex-col h-screen">
        {/* First Column (80%) - Slideshow */}
        <div className="">
          <Slideshow images={images} />
        </div>

        {/* Second Column (20%) - Buttons */}
        <div className="grid grid-cols-6 items-center justify-center py-4 px-2 gap-2">
          {/* First Column: Back Icon */}
          <div className="col-span-4 flex items-center justify-center">
            <button className="flex flex-col justify-center items-center px-4 py-2 line-clamp-3 rounded-lg bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-24 w-72 md:h-16 md:w-96 font-semibold">
              <span className="text-lg">Click here to </span>
              <span className="text-2xl">BUY NOW!</span>
            </button>
          </div>
          {/* Second Column: Logo */}
          <div className="col-span-2 flex items-center justify-center ">
            <button className="flex flex-col justify-center items-center px-4 py-2 border-solid border-2 border-carpetMoss line-clamp-3 rounded-lg text-carpetMoss text-center h-24 w-72 md:h-16 md:w-96 font-semibold">
              Select Languages
              <span className="mt-1">
                <CiGlobe className=" text-4xl md:text-6xl" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
