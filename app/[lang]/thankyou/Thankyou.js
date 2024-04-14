"use client";
import { motion, useCycle } from "framer-motion";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator";
import { IoReceiptOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Page = ({ lang, thankyoumsg, gohome, collectyourreceipt }) => {
  const totalSteps = 6;
  const activeStep = 5;

  const [rotation, cycleRotation] = useCycle(0, 360); // Using useCycle hook to cycle between 0 and 360 degrees
  const [scale, cycleScale] = useCycle(1, 1.2); // Using useCycle hook to cycle between 1 and 1.2 for scaling

  return (
    <div className="relative  overflow-hidden w-screen max-w-[698.7px] min-h-screen space-y-8 px-4 py-8">
      {/* Step Indicator */}
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />

      {/* Logo Section */}
      <LogoSection cart={false} back={true} />

      <div className="flex flex-col justify-center items-center space-y-4">
        {/* Checkmark SVG Animation */}
        <motion.svg
          initial={{ scale: 0.8 }} // Initial scale of 0.8 for animation
          animate={{ scale: scale }} // Scale up smoothly
          transition={{ type: "spring", stiffness: 500, damping: 20 }} // Spring animation
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="bg-white p-1 border-solid border-2 border-carpetMoss shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full"
          onClick={() => cycleScale()} // Trigger cycleScale function onClick to change scale
        >
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            fill="transparent"
            initial={{ strokeDasharray: "78.54", strokeDashoffset: "78.54" }}
            animate={{ strokeDashoffset: "0" }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          />
          {/* Scaled-up tick SVG */}
          <motion.path
            d="M4 13 L10 18 L20 6"
            stroke="#02A633"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.3 }} // Add a delay of 2000 milliseconds
          />
        </motion.svg>

        <div className="flex flex-col justify-center items-center text-8xl font-extrabold text-carpetMoss">
          <h1 className="stroke drop-shadow-[0_1px_2px_rgb(0,0,0,0.5)] tracking-wide">
            THANK
          </h1>
          <h1 className="stroke flex justify-center items-center drop-shadow-[0_1px_2px_rgb(0,0,0,0.5)] ">
            Y
            <div className="relative m-1">
              {/* Image without animation */}
              <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-white">
                <Image
                  src={"/images/logo.png"}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className=" object-cover w-full h-full"
                />
              </div>
            </div>
            U
          </h1>

          {/* Thank You Message */}
          <p className="text-lg text-center text-gray-500 font-normal">
            {thankyoumsg}
          </p>
        </div>

        {/* Go Home Button */}
        <div className="flex flex-col justify-center items-center py-4 ">
          <Link
            href={"/"}
            className="relative px-8 py-2 line-clamp-3 border-solid border-2 border-carpetMoss rounded-full text-carpetMoss text-center h-12 font-semibold"
          >
            {gohome}
          </Link>
        </div>
        <div className="flex flex-col justify-end items-center pt-20 space-y-2">
          <IoReceiptOutline className="text-carpetMoss text-6xl" />

          <p className="text-lg text-gray-500 font-normal mt-4">
            {collectyourreceipt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
