import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const LanguagesDropdown = ({ setNewLang }) => {
  const [selectedOption, setSelectedOption] = useState("English");
const options = [
  {
    language: "English",
    flag: "US",
    country: "United States",
    shorthand: "en",
  },
  { language: "Thai", flag: "TH", country: "Thailand", shorthand: "th" },
  { language: "Spanish", flag: "ES", country: "Spain", shorthand: "es" },
  { language: "French", flag: "FR", country: "France", shorthand: "fr" },
  { language: "German", flag: "DE", country: "Germany", shorthand: "de" },
  { language: "Italian", flag: "IT", country: "Italy", shorthand: "it" },
  { language: "Japanese", flag: "JP", country: "Japan", shorthand: "ja" },
  { language: "Chinese", flag: "CN", country: "China", shorthand: "zh" },
  { language: "Russian", flag: "RU", country: "Russia", shorthand: "ru" },
  { language: "Portuguese", flag: "PT", country: "Portugal", shorthand: "pt" },
  { language: "Hindi", flag: "IN", country: "India", shorthand: "hi" },
  { language: "Korean", flag: "KR", country: "South Korea", shorthand: "ko" },
  { language: "Dutch", flag: "NL", country: "Netherlands", shorthand: "nl" },
  { language: "Turkish", flag: "TR", country: "Turkey", shorthand: "tr" },
];


  const handleOptionClick = (option) => {
    setSelectedOption(option.language);
    setNewLang(option.shorthand);
  };

  return (
    <div className="flex justify-center items-center py-4">
      <div className="inline-block text-left">
        <div>
          <span className="rounded-xl w-96 text-lg font-medium  border shadow-md bg-white px-8 py-4 inline-flex justify-between items-center relative">
            Select Language
          </span>
        </div>

        <div className="mt-2 max-h-[19.5rem] shadow-lg overflow-y-auto overflow-x-hidden backdrop-blur-xl bg-blurred rounded-xl">
          {options.map((option) => (
            <motion.div
              key={option.language}
              className={`block px-4 py-2 cursor-pointer text-lg  ${
                selectedOption === option.language ? "bg-selected " : ""
              }`}
              onClick={() => handleOptionClick(option)}
              transition={{ duration: 0.2 }}
              animate={{ scale: selectedOption === option.language ? 1.12 : 1 }}
            >
              <div className={`flex justify-between items-center py-2 px-2
              ${selectedOption === option.language ? "px-3 py-3 " : ""}
              `}>
                <div className="flex items-center px-2">
                  <div className={`relative overflow-hidden rounded-full h-7 w-7`}>
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesDropdown;
