import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import SwipeableProductCarousel from "@/components/SwipeableProductCarousel/SwipeableProductCarousel";
import { getDictionary } from "@/getDictionary";

const page = async ({ params }) => {
  const totalSteps = 6;
  const activeStep = 2;

  const lang = await getDictionary(params.lang);

  return (
    <div className="relative  overflow-hidden w-screen max-w-[698.7px] min-h-screen space-y-6 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={true} />
      <SwipeableProductCarousel
        types={lang.types.heading}
        lang={params.lang}
        details={lang.types.prerolled}
      />
    </div>
  );
};

export default page;
