"use client";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import NextButton from "@/components/buttons/NextButton";
import MainHeading from "@/components/Headings/MainHeading";
import ProductList from "@/components/ProductList/ProductList";
import SwipeableProductCarousel from "@/components/SwipeableProductCarousel/SwipeableProductCarousel";

const page = () => {
  const totalSteps = 6;
  const activeStep = 2;

  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-6 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={true} />
      <div className="">
        <SwipeableProductCarousel />
      </div>
    </div>
  );
};

export default page;
