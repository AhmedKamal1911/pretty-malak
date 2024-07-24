import { kingdom, egypt } from "@/assets";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { languages } from "../../data";
const LanguageSelectMenu = () => {
  const languageImages = {
    EN: kingdom,
    AR: egypt,
  };
  const [showSelectMenu, setShowSelectMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  return (
    <div className="relative">
      <div className="border border-[#a1a0a0ab] bg-white rounded-md overflow-hidden">
        <button className="flex items-center gap-1 w-full h-full px-8 py-2 relative">
          {selectedLanguage}
          <img
            src={languageImages[selectedLanguage]}
            alt=""
            className="w-[20px] h-[20px]"
          />
          <span className="absolute right-[10px]">
            <IoIosArrowDown />
          </span>
        </button>
      </div>
      <ul className="bg-white border rounded-sm w-full absolute top-[calc(100%+5px)]">
        {languages.map(({ name, icon }) => (
          <li key={name}>
            <a
              key={name}
              className="flex gap-1 items-center cursor-pointer hover:animate-background-change justify-center p-3 relative hover:after:animate-fill-to-right after:absolute after:bottom-0 after:left-0 after:h-[2px] after:content-[''] after:bg-gradient-to-r after:from-main after:to-transparent"
            >
              <img src={icon} alt="" className="w-[20px] h-[20px]" />
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelectMenu;
