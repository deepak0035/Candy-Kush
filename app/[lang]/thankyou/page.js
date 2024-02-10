import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/getDictionary";

const Page = async ({params}) => {
  const totalSteps = 6;
  const activeStep = 5;

    const lang = await getDictionary(params.lang);


  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-6 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={false} back={true}/>
      <div className="flex flex-col justify-center items-center space-y-6">
        <div className="bg-white p-1 border-solid border-2 border-carpetMoss shadow-[0_1px_2px_rgb(0,0,0,0.3)] rounded-full flex justify-center items-center">
          <FaCheck className="text-7xl font-normal text-carpetMoss" />
        </div>
        <div className="flex flex-col justify-center items-center text-8xl font-extrabold text-carpetMoss">
          <h1 className="stroke drop-shadow-[0_1px_2px_rgb(0,0,0,0.5)] tracking-wide">
            THANK
          </h1>
          <h1 className="stroke flex justify-center items-center drop-shadow-[0_1px_2px_rgb(0,0,0,0.5)] ">
            Y
            <div className="relative m-1">
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
          <p className="text-lg text-gray-500 font-normal mt-4">
            {lang.thankyou.thankyoumsg}
          </p>
        </div>
        <div className="flex justify-start items-center py-2">
          <Link href={'/'} className="relative px-4 py-2 line-clamp-3 border-solid border-2 border-carpetMoss  rounded-full  text-carpetMoss text-center  h-12  font-semibold">
            {lang.thankyou.gohome}
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Page;
