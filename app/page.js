"use client";
import Slideshow from "@/components/Welcome-SlideShow/SlideShow";
import BottomButtons from "@/components/Buttons/WelcomeScreenButtons";

const page = () => {
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
