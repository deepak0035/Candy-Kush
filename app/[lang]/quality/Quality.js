"use client";
import { useState } from "react";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import SwipeableProductCarousel2 from "@/components/SwipeableProductCarousel/SwipeableProductCarousel2";
import CustomModal from "@/components/Popup/CustomModal";


const Page = ({ lang, quality, size, addtocart }) => {
  const totalSteps = 6;
  const activeStep = 3;

  const [open, setOpen] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleMainDivClick = () => {
    if (open) {
      onCloseModal();
    }
  };

  return (
    <>
      <div
        onClick={handleMainDivClick}
        className={`relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-6 px-4 py-8 ${
          open ? "blur-sm transition duration-200 ease-out" : ""
        }`}
      >
        <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
        <LogoSection cart={true} />
        <div className="">
          <SwipeableProductCarousel2
            onOpen={onOpenModal}
            setSizes={setSizes}
            quality={quality}
          />
        </div>
      </div>
 
        <CustomModal
          open={open}
          sizes={sizes}
          onClose={onCloseModal}
          parentWidth={"100%"}
          lang={lang}
          size={size}
        addtocart={addtocart}

        />
    </>
  );
};

export default Page;
