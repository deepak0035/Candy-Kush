'use client'
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "@/public/images/logo.png";

const LogoSection = ({ cart, back}) => {
  const router = useRouter();

  const handleBackClick = () => {
    // Go back in history
    router.back();
  };

  const handleHomeClick = () => {
    // Navigate to the home page
    router.push("/");
  };

  const handleCartClick = () => {
    // Navigate to the cart page
    router.push("/check-out");
  };

  return (
    <>
      <div className="grid grid-cols-3 items-center justify-center py-2 gap-4">
        {/* First Column: Back Icon */}
        <div
          className={`${!back ? "flex items-center justify-start space-x-2" : "invisible"} `}
        >
          <button
            onClick={handleBackClick}
            className="px-2 py-2 backdrop-blur-lg bg-carpetMoss bg-opacity-100 rounded-xl shadow-[0_1px_2px_rgb(0,0,0,0.7)]"
          >
            <IoIosArrowBack className="text-white text-4xl" />
          </button>
        </div>
        {/* Second Column: Logo */}
        <div className="col-span-1 flex items-center justify-center">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="Picture of the author"
            onClick={handleHomeClick}
            className="cursor-pointer object-cover"
          />
        </div>
        {/* Third Column: Cart Icon */}
        <div
          className={`${cart ? "flex items-center justify-end" : "invisible"} `}
        >
          <button
            onClick={handleCartClick}
            className="px-2 py-2 backdrop-blur-lg bg-carpetMoss bg-opacity-100 rounded-xl shadow-[0_1px_2px_rgb(0,0,0,0.7)]"
          >
            <IoCartOutline className="text-white text-4xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoSection;
