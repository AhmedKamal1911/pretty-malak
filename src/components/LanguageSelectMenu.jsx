import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { languageImages, languages } from "../../data";
const LanguageSelectMenu = () => {
  const [showSelectMenu, setShowSelectMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => localStorage.getItem("lang") ?? "EN"
  );
  const componentRef = useRef(null);
  const listRef = useRef(null);
  const [isMounted, setIsMounted] = useState(true);
  console.log(showSelectMenu, "show slect menu");
  const handleLanguageSelect = (name) => {
    setIsMounted(false);
    setSelectedLanguage(name);
    console.log("selected");
    localStorage.setItem("lang", name);
    setShowSelectMenu(false);
  };
  const handleShowSelectMenu = (e) => {
    setIsMounted(false);
    setShowSelectMenu((prev) => !prev);
  };
  const handleClickOutside = (e) => {
    if (
      !componentRef.current.contains(e.target) &&
      !listRef.current.contains(e.target)
    ) {
      console.log("click out side");
      setShowSelectMenu(false);
    }
    console.log(e);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const activeMenuClass =
    (!isMounted &&
      (showSelectMenu ? "animate-fadeInUp" : "animate-fadeOutUp")) ||
    "hidden";

  return (
    <div className="relative select-none">
      <div
        className="border backdrop-blur-[0px] text-white border-[#dfdfdf5d] bg-transparent rounded-md overflow-hidden lg:w-[90px]"
        ref={componentRef}
      >
        <button
          onClick={handleShowSelectMenu}
          className="flex items-center gap-1 w-full h-full pl-5 pr-8 py-2 relative"
        >
          {selectedLanguage}
          <img
            src={languageImages[selectedLanguage]}
            alt=""
            className="w-[20px] h-[20px]"
          />
          <span className="absolute top-1/2 -translate-y-1/2 right-[10px] pointer-events-none">
            {showSelectMenu ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </button>
      </div>
      <ul
        ref={listRef}
        className={`bg-white border rounded-sm w-full absolute z-[999] top-[calc(100%+5px)] ${activeMenuClass}`}
      >
        {languages.map(({ name, icon }) => (
          <li key={name}>
            <a
              onClick={() => handleLanguageSelect(name)}
              key={name}
              className="flex gap-1 items-center cursor-pointer hover:animate-background-change justify-center p-3 relative hover:after:animate-fill-to-right after:absolute after:bottom-0 after:left-0 after:h-[2px] after:content-[''] after:bg-gradient-to-r after:from-main after:to-transparent"
            >
              {name}
              <img src={icon} alt="" className="w-[20px] h-[20px]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelectMenu;
