// components/StepIndicator.js
import React from "react";

const StepIndicator = ({ totalSteps, activeStep }) =>
{
  return (
    <div className="flex justify-evenly py-4">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`w-36 h-4 bg-carpetMoss bg-opacity-20 rounded-lg ${
            index === activeStep ? "bg-carpetMoss bg-opacity-[100%] w-40" : ""
          }`}
        ></div>
      ))}
    </div>
  );
};

export default StepIndicator;
