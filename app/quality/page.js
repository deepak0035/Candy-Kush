"use client";
import {useState} from 'react'
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import NextButton from "@/components/buttons/NextButton";
import MainHeading from "@/components/Headings/MainHeading";
import ProductList from "@/components/ProductList/ProductList";
import SwipeableProductCarousel2 from "@/components/SwipeableProductCarousel/SwipeableProductCarousel2";
import CustomPopup from '@/components/Popup/customPopup';

const page = () => {
  const totalSteps = 6;
  const activeStep = 2;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-6 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={true} />
      <div className="">
        <SwipeableProductCarousel2 />
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>

        <CustomPopup isOpen={isModalOpen} onClose={closeModal}>
          {/* Your custom content goes here */}
          <h1>Hello, this is your custom modal content!</h1>
        </CustomPopup>
      </div>
    </div>
  );
};

export default page;
