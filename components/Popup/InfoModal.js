import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence from Framer Motion

const InfoModal = ({
  showDetails,
  modalRef,
  closeDetailsModal,
  description,
}) => {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3, // Shortened duration for faster animation
        type: "spring", // Changed type to spring for smoother animation
        damping: 20, // Reduced damping for a less stiff motion
        stiffness: 200, // Reduced stiffness for a more elastic motion
      },
    },
    exit: {
      y: "100vh", // Move modal up during exit animation
      opacity: 0,
      transition: {
        duration: 0.5, // Keep exit duration longer for a smoother exit
        type: "spring", // Maintain spring type for consistency
        damping: 20,
        stiffness: 200,
      },
    },
  };

  return (
    <AnimatePresence>
      {showDetails && (
        <motion.div
          className="fixed px-6 m-auto bottom-0 right-0 left-0 z-50 w-full max-w-[698.7px] min-h-screen flex justify-center items-center"
          initial={{ backdropFilter: "blur(0px)" }} // Apply initial blur of 0px
          animate={{ backdropFilter: "blur(10px)" }} // Apply blur when modal is open
          exit={{ backdropFilter: "blur(0px)" }} // Remove blur when modal is closing
          onClick={closeDetailsModal} // Close the modal when clicking outside of it
        >
          <motion.div
            className="bg-green-50/80 rounded-2xl shadow-[0_1px_4px_rgb(0,0,0,0.8)] border px-4 py-4"
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div class="grid grid-cols-5 gap-4">
              <div className="flex justify-end col-span-3">
                <BsInfoCircleFill
                  className="text-carpetMoss text-3xl cursor-pointer"
                  onClick={closeDetailsModal}
                />
              </div>

              <div className="flex justify-end col-span-2">
                <IoMdClose
                  className="text-gray-700 text-xl cursor-pointer"
                  onClick={closeDetailsModal}
                />
              </div>
            </div>
            <h2 className="text-[0.85rem] text-center text-black/50 my-3 px-2">
              {description}
            </h2>
            {/* Add additional product details here */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
