import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator"; // Assuming the path is correct
import MainHeading from "@/components/Headings/MainHeading";
import ProductList from "@/components/ProductList/ProductList";
import { getDictionary } from "@/getDictionary";

const page = async ({params}) => {
  const totalSteps = 6;
  const activeStep = 1;

  const lang = await getDictionary(params.lang);


  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-4 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={false} />
      <MainHeading heading={lang.products.heading} />
      <ProductList comingsoon={lang.products.comingsoon} lang={ params.lang} />
    </div>
  );
};

export default page;
