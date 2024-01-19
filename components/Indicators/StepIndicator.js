// components/StepIndicator.js
import React from "react";

const StepIndicator = ({ totalSteps, activeStep }) =>
{
  return (
    <div className="flex justify-evenly">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`w-14 h-2 bg-carpetMoss bg-opacity-20 rounded-lg ${
            index === activeStep ? "bg-carpetMoss bg-opacity-[100%] w-16" : ""
          }`}
        ></div>
      ))}
    </div>
  );
};

export default StepIndicator;
