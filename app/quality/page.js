"use client";
import { useState } from "react";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import NextButton from "@/components/Buttons/NextButton";
import MainHeading from "@/components/Headings/MainHeading";
import ProductList from "@/components/ProductList/ProductList";
import SwipeableProductCarousel2 from "@/components/SwipeableProductCarousel/SwipeableProductCarousel2";
import CustomModal from "@/components/Popup/CustomModal";

const page = () => {
  const totalSteps = 6;
  const activeStep = 3;

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [sizes, setSizes] = useState([]);

  return (
    <>
      <div
        className={`relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-6 px-4 py-8 ${
          open ? "blur-sm transition duration-300 ease-out" : " "
        }`}
      >
        <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
        <LogoSection cart={true} />
        <div className="">
          <SwipeableProductCarousel2 onOpen={onOpenModal} setSizes={setSizes} />
        </div>
      </div>

      <CustomModal open={open} sizes={sizes} onClose={onCloseModal} parentWidth={"100%"} />
    </>
  );
};

export default page;
