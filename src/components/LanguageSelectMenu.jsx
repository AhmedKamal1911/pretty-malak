import { useState } from "react";

import { languages } from "@/data";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/SelectMenu";

import { egypt, kingdom } from "@/assets";
import { twMerge } from "tailwind-merge";

const LanguageSelectMenu = ({ className }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => localStorage.getItem("lang") ?? "EN"
  );

  const onLanguageChange = (value) => {
    console.log("changed");
    setSelectedLanguage(value);
    localStorage.setItem("lang", value);
  };

  return (
    <Select onValueChange={onLanguageChange}>
      <SelectTrigger
        className={twMerge("text-[17px] text-white w-[120px]", className)}
      >
        <SelectValue
          placeholder={
            <div className="flex gap-2 items-center">
              {selectedLanguage}
              <img
                src={selectedLanguage === "AR" ? egypt : kingdom}
                alt=""
                className="w-[18px] h-[18px]"
              />
            </div>
          }
        ></SelectValue>
      </SelectTrigger>
      <SelectContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => e.preventDefault();
        }}
        className="relative left-[0px] right-0 bg-white z-[1001] w-full"
      >
        {languages.map(({ name, icon }, i) => (
          <SelectItem
            key={i}
            value={name}
            className="text-[17px]  cursor-pointer  hover:bg-[#ebeaea] transition-all  w-full"
          >
            {name}
            {<img src={icon} alt="" className="w-[18px] h-[18px]" />}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelectMenu;
