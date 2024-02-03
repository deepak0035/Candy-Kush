"use client";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import LanguagesDropdown from "@/components/Dropdown/LanguagesDropdown";
import MainHeading from "@/components/Headings/MainHeading";
import Button from "@/components/Buttons/Button";


const page = () => {
  const totalSteps = 6;
  const activeStep = 0;

  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-4 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={false} />
      <MainHeading heading={"LANGUAGES"} />
      <LanguagesDropdown />
      <Button title={"Next"} />
    </div>
  );
};

export default page;
