'use client';
import { motion, useCycle } from "framer-motion";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/getDictionary";

const Page = ({ lang, thankyoumsg, gohome }) => {
  const totalSteps = 6;
  const activeStep = 5;

  const [rotation, cycleRotation] = useCycle(0, 360); // Using useCycle hook to cycle between 0 and 360 degrees
  const [scale, cycleScale] = useCycle(1, 1.2); // Using useCycle hook to cycle between 1 and 1.2 for scaling

  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-6 px-4 py-8">
      {/* Step Indicator */}
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />

      {/* Logo Section */}
      <LogoSection cart={false} back={true} />

      <div className="flex flex-col justify-center items-center space-y-6">
        {/* Checkmark Icon */}
        <motion.div
          initial={{ scale: 0.8 }} // Initial scale of 0.8 for animation
          animate={{ scale: scale }} // Scale up smoothly
          transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring animation
          className="bg-white p-1 border-solid border-2 border-carpetMoss shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center"
          onClick={() => cycleScale()} // Trigger cycleScale function onClick to change scale
        >
          <FaCheck className="text-7xl font-normal text-carpetMoss" />
        </motion.div>

        <div className="flex flex-col justify-center items-center text-8xl font-extrabold text-carpetMoss">
          <h1 className="stroke drop-shadow-[0_1px_2px_rgb(0,0,0,0.5)] tracking-wide">
            THANK
          </h1>
          <h1 className="stroke flex justify-center items-center drop-shadow-[0_1px_2px_rgb(0,0,0,0.5)] ">
            Y
            <div className="relative m-1">
              {/* Animated Image */}
              <motion.div
                initial={{ rotate: -45 }} // Initial rotation of -45 degrees
                animate={{ rotate: rotation + 360 }} // Rotate infinitely
                transition={{ duration: 5, loop: Infinity }} // Animation duration and loop infinitely
                className="w-20 h-20 overflow-hidden rounded-full border-2 border-white"
                onClick={() => cycleRotation()} // Trigger cycleRotation function onClick to change rotation
              >
                <Image
                  src={"/images/logo.png"}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className=" object-cover w-full h-full"
                />
              </motion.div>
            </div>
            U
          </h1>
          {/* Thank You Message */}
          <p className="text-lg text-gray-500 font-normal mt-4">
            {thankyoumsg}
          </p>
        </div>

        {/* Go Home Button */}
        <div className="flex justify-start items-center py-2">
          <Link
            href={"/"}
            className="relative px-8 py-2 line-clamp-3 border-solid border-2 border-carpetMoss rounded-full text-carpetMoss text-center h-12 font-semibold"
          >
            {gohome}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;

