'use client'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { selectCartItems } from "@/Redux/Slices/cartSlice";
import { useSelector } from "react-redux";

const LogoSection = ({ cart, back }) => {
  const router = useRouter();
  const cartItems = useSelector(selectCartItems);
  const cartItemCount = cartItems.length;

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
          className={`${
            !back ? "flex items-center justify-start space-x-2" : "invisible"
          } `}
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
          <motion.div
            animate={{
              rotate: [-20, 20, -20], // Rotate left and right without stopping at 0 degrees
              transition: { duration: 2, repeat: Infinity },
            }}
            onClick={handleHomeClick}
            className="logo-3d"
          >
            <Image
              src={logo}
              width={150}
              height={150}
              alt="Picture of the author"
              className="cursor-pointer object-cover"
            />
          </motion.div>
        </div>
        {/* Third Column: Cart Icon */}
        <div
          className={`${cart ? "flex items-center justify-end" : "invisible"} `}
        >
          <button
            onClick={handleCartClick}
            className="px-2 py-2 backdrop-blur-lg bg-carpetMoss bg-opacity-100 rounded-xl shadow-[0_1px_2px_rgb(0,0,0,0.7)] relative"
          >
            <IoCartOutline className="text-white text-4xl" />
            {cartItemCount > 0 && ( // Display cart item count if greater than 0
              <span className="absolute -top-2 right-2 p-2 bg-yellow-300 text-carpetMoss text-sm font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoSection;
