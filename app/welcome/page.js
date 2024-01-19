
"use client";
import Image from "next/image";
import Slideshow from "@/components/welcomeScreen/slideshow/SlideShow";
import BottomButtons from "@/components/welcomeScreen/bottomButtons/BottomButtons";

const page = () => {
  const languageBtn = () => {
    console.log("language");
  };

  const buyNowBtn = () => {
    console.log("buyNow");
  };

  const images = [
    "/images/welcome1.png",
    "/images/welcome2.png",
    "/images/welcome3.png",
    // Add more image paths as needed
  ];

  return (
    <div className="w-full max-w-lg min-h-screen">
      <div className="flex flex-col h-screen justify-between">
        <Slideshow images={images} />
        <BottomButtons />
      </div>
    </div>
  );
};

export default page;

