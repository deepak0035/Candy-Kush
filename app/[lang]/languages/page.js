"use client";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator";
import LanguagesDropdown from "@/components/Dropdown/LanguagesDropdown";
import MainHeading from "@/components/Headings/MainHeading";
import { BsArrowRight } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation"; // Import from next/router instead of next/navigation
import { useState } from "react";



const Page = () => {
  const totalSteps = 6;
  const activeStep = 0;

  const [newLang, setNewLang] = useState("");
  const router = useRouter();


const handleSetLang = () => {



  // Construct the new route with the updated language parameter
  const route = `/${newLang}/products`; // Assuming "products" is a dynamic segment

  // Push the updated route to the router
  router.push(route);

};

  return (
    <div className="relative  overflow-hidden w-full max-w-lg min-h-screen space-y-4 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={false} />
      <MainHeading heading={"LANGUAGES"} />
      <LanguagesDropdown setNewLang={setNewLang} />
      <div className="flex justify-center items-center py-2">
        <button
          onClick={() => handleSetLang("en")} // Change the language to "en" on button click
          className="relative px-4 py-2 line-clamp-3 rounded-full bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-12 w-4/5 md:h-16 md:w-96 font-semibold"
        >
          <span className="text-2xl">Next</span>
          <span className="absolute top-3 right-4 md:top-5">
            <BsArrowRight className="text-2xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Page;
