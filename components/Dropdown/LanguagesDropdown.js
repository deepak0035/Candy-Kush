"use client";
// components/CustomDropdown.js
import React, { useState } from "react";
import { HiCheck } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";


const LanguagesDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("English");

  const options = [
    { language: "English", flag: "US", country: "United States" },
    { language: "Thai", flag: "TH", country: "Thailand" },
    { language: "Spanish", flag: "ES", country: "Spain" },
    { language: "French", flag: "FR", country: "France" },
    { language: "German", flag: "DE", country: "Germany" },
    { language: "Italian", flag: "IT", country: "Italy" },
    { language: "Japanese", flag: "JP", country: "Japan" },
    { language: "Chinese", flag: "CN", country: "China" },
    { language: "Russian", flag: "RU", country: "Russia" },
    { language: "Arabic", flag: "SA", country: "Saudi Arabia" },
    { language: "Portuguese", flag: "PT", country: "Portugal" },
    { language: "Hindi", flag: "IN", country: "India" },
    { language: "Korean", flag: "KR", country: "South Korea" },
    { language: "Dutch", flag: "NL", country: "Netherlands" },
    { language: "Turkish", flag: "TR", country: "Turkey" },
    { language: "Swedish", flag: "SE", country: "Sweden" },
    { language: "Greek", flag: "GR", country: "Greece" },
    { language: "Hebrew", flag: "IL", country: "Israel" },
    { language: "Polish", flag: "PL", country: "Poland" },
    { language: "Czech", flag: "CZ", country: "Czech Republic" },
    // Add more languages as needed
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex justify-center items-center py-4"> 
      <div className="inline-block text-left">
        <div>
          <span className="rounded-lg w-96 text-lg border shadow-md bg-white px-8 py-4 inline-flex justify-between items-center relative">
            Select Language
            <IoIosArrowDown className="text-xl" />
          </span>
        </div>

        <div className="mt-2 max-h-[19rem] shadow-lg overflow-y-auto backdrop-blur-xl bg-blurred	rounded-lg">
          {options.map((option) => (
            <div
              key={option.language}
              className={`block px-4 py-2 cursor-pointer text-lg ${
                selectedOption === option.language ? "bg-selected " : ""
              }`}
              onClick={() => handleOptionClick(option.language)}
            >
              <div className=" flex justify-between items-center py-2 px-2">
                <div className="flex items-center px-2">
                  <div className="relative overflow-hidden rounded-full h-7 w-7">
                    <Image
                      src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${option.flag}.svg`}
                      width={150}
                      height={150}
                      className="absolute w-fit h-full object-cover"
                      alt={option.country}
                    />
                  </div>
                  <div className="ml-4">{option.language}</div>
                </div>

                {selectedOption === option.language && (
                  <HiCheck className=" text-xl md:text-xl" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesDropdown;
