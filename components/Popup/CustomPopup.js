import React from "react";

const CustomPopup = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-blurred flex justify-center items-center">
          <div className="bg-white p-4 border-2 shadow-xl">
            <button className=" absolute top-0 right-0 cursor-pointer" onClick={onClose}>
              Close
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomPopup;
