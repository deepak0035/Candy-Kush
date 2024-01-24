'use client'
import { useState } from "react";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator";
import OrderList from "@/components/OrderList/OrderList";

const Page = () => {
  const totalSteps = 6;
  const activeStep = 4;

  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-6 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={true} />
      <OrderList />

      <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center py-2">
        <button className="relative px-4 py-2 line-clamp-3 rounded-full bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-12 w-4/5 md:h-16 md:w-96 font-semibold">
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default Page;
