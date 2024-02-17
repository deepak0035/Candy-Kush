import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, closeModal, prerolled }) => {
  const modalRef = useRef(null);

  const closeModalOnClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeModalOnClickOutside);
    } else {
      document.removeEventListener("mousedown", closeModalOnClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", closeModalOnClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-lg p-8"
            style={{ maxWidth: "500px" }}
          >
            <div className="flex justify-end">
              <IoMdClose
                className="text-gray-600 cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <h2 className="text-lg font-medium mb-4">{prerolled}</h2>
            {/* Add additional content for the modal */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
