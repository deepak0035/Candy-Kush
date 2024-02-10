import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import SwipeableProductCarousel from "@/components/SwipeableProductCarousel/SwipeableProductCarousel";
import { getDictionary } from "@/getDictionary";

const page = async ({ params }) => {
  const totalSteps = 6;
  const activeStep = 2;

  const lang = await getDictionary(params.lang);

  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-6 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={true} />
      <SwipeableProductCarousel types={lang.types.heading} lang={params.lang} />
    </div>
  );
};

export default page;
