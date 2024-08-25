import { useContext, useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/SelectMenu";

import { twMerge } from "tailwind-merge";
import { languages } from "@/data";
import { PageDirectionContext } from "@/contexts/PageDirectionProvider";

const LanguageSelectMenu = ({ className }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => JSON.parse(localStorage.getItem("lang")) ?? languages[0]
  );
  const { toggleDirection } = useContext(PageDirectionContext);
  const onLanguageChange = (value) => {
    setSelectedLanguage(value);
    localStorage.setItem("lang", JSON.stringify(value));
  };

  useEffect(() => {
    if (selectedLanguage) {
      onLanguageChange(selectedLanguage);
      toggleDirection(
        JSON.parse(localStorage.getItem("lang")).languageName === "ar"
      );
    }
  }, [selectedLanguage, toggleDirection]);

  return (
    <Select onValueChange={onLanguageChange}>
      <SelectTrigger
        className={twMerge("text-[17px] text-white w-[120px]", className)}
      >
        <SelectValue
          placeholder={
            <div className="flex gap-2 items-center">
              {selectedLanguage.languageName}
              <img
                className="h-7 w-7 mr-2"
                src={`https://flagsapi.com/${selectedLanguage.countryName}/flat/64.png`}
              />
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => e.preventDefault();
        }}
        className="relative left-[0px] end-0 bg-white z-[1001] w-full"
      >
        {languages.map((language, i) => (
          <SelectItem
            key={i}
            value={language}
            className={`text-[17px]  cursor-pointer  hover:bg-[#ebeaea] transition-all  w-full ${language.countryName === selectedLanguage?.countryName ? "bg-[#acacad]" : ""} mb-1`}
          >
            {language.languageName}
            {
              <img
                src={`https://flagsapi.com/${language.countryName}/flat/64.png`}
                alt=""
                className="w-[18px] h-[18px]"
              />
            }
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelectMenu;
