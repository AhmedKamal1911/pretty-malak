import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/SelectMenu";

import { egypt, kingdom } from "@/assets";
import { twMerge } from "tailwind-merge";
import { fetchLanguages } from "@/services/trips/queries";
import { useQuery } from "@tanstack/react-query";
import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";

import { FetchTripsTypesLoader } from "./feedback";
import { Loading, SelectError } from ".";

const languageImages = {
  en: kingdom,
  ar: egypt,
};
const LanguageSelectMenu = ({ className }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => localStorage.getItem("lang") ?? "EN"
  );
  const { data, isFetching, error } = useQuery({
    queryKey: ["languageMenu"], // Object form for query key
    queryFn: fetchLanguages,
  });
  const languagesList = data?.languagesList ?? [];

  const onLanguageChange = (value) => {
    console.log("changed");
    setSelectedLanguage(value);
    localStorage.setItem("lang", value);
  };

  return (
    <Select onValueChange={onLanguageChange}>
      <SelectTrigger
        disabled={isFetching ? true : Boolean(error)}
        className={twMerge("text-[17px] text-white w-[120px]", className)}
      >
        <Loading
          isFetching={isFetching}
          loadingElement={<FetchTripsTypesLoader />}
          error={error}
          errorElement={<SelectError />}
        >
          <SelectValue
            placeholder={
              <div className="flex gap-2 items-center">
                {selectedLanguage}
                <img
                  src={languageImages[selectedLanguage]}
                  alt=""
                  className="w-[18px] h-[18px]"
                />
              </div>
            }
          />
        </Loading>
      </SelectTrigger>
      <SelectContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => e.preventDefault();
        }}
        className="relative left-[0px] right-0 bg-white z-[1001] w-full"
      >
        {languagesList.map(({ name, icon, id }) => (
          <SelectItem
            key={id}
            value={name}
            className="text-[17px]  cursor-pointer  hover:bg-[#ebeaea] transition-all  w-full"
          >
            {name}
            {
              <img
                src={getStrapiMediaURL(icon.url)}
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
