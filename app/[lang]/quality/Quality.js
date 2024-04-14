"use client";
import { useState } from "react";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import SwipeableProductCarousel2 from "@/components/SwipeableProductCarousel/SwipeableProductCarousel2";
import CustomModal from "@/components/Popup/CustomModal";


const Page = ({ lang, quality, size, addtocart, details }) => {
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
        className={`relative w-screen max-w-[698.7px] min-h-screen space-y-6 px-4 py-8        }`}
      >
        <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
        <LogoSection cart={true} />
        <div className="">
          <SwipeableProductCarousel2
            onOpen={onOpenModal}
            setSizes={setSizes}
            quality={quality}
            details={details}
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
