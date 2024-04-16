'use client';
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <div className="bg-texture bg-cover bg-no-repeat overflow-hidden min-h-[1920px] max-w-[1080px] w-screen h-screen">
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }} // Start from left side (off-screen)
        animate={{ opacity: 1, x: 0 }} // Slide in from left to center
        exit={{ opacity: 0, x: "100vw" }} // Slide out to right side (off-screen)
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
