"use client";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import LanguagesDropdown from "@/components/Dropdown/LanguagesDropdown";
import MainHeading from "@/components/Headings/MainHeading";
import { BsArrowRight } from "react-icons/bs";


const page = () => {
  const totalSteps = 6;
  const activeStep = 0;

  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-4 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={false} />
      <MainHeading heading={"LANGUAGES"} />
      <LanguagesDropdown />
      <div className="flex justify-center items-center py-2">
        <button className="relative px-4 py-2 line-clamp-3 rounded-full bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-12 w-4/5 md:h-16 md:w-96 font-semibold">
          <span className="text-2xl">{"Next"}</span>
          <span className="absolute top-3 right-4 md:top-5">
            <BsArrowRight className="text-2xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default page;
