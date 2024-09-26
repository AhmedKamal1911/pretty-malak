import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";

import { IoEarthSharp } from "react-icons/io5";
import { countries } from "@/data";
import { useTranslation } from "react-i18next";

export function ComboboxDemo({ selectCountry, onSelectCountry }) {
  const { t } = useTranslation("global");
  const [open, setOpen] = React.useState(false);
  const handleSelectCountry = (country) => {
    onSelectCountry(country);
  };
  const country = countries.find((country) => country.name === selectCountry);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full text-[16px] ps-0  border-t-0 border-l-0  border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border] duration-500 justify-between"
        >
          <div className="flex items-center">
            <IoEarthSharp className="me-2 h-4 w-4 shrink-0 opacity-50 text-main" />
            <span className="text-grayDesc text-ellipsis overflow-hidden max-w-[160px] text-start">
              {selectCountry
                ? country?.name
                : t("global.inputs.country.introText")}
            </span>
          </div>
          <ChevronsUpDown className="ms-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[270px] sm:min-w-[350px] p-0 bg-white shadow-md">
        <Command>
          <CommandInput
            placeholder={t("global.inputs.country.searchCountry")}
          />
          <CommandList>
            <CommandEmpty className="text-main p-3 text-center">
              {t("global.inputs.country.notFound")}
            </CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  className={`p-3 font-serif font-semibold hover:bg-[#dddcdc56] transition-all ${
                    selectCountry === country.name ? "bg-gray-300" : ""
                  }`}
                  key={country.code}
                  value={country.name}
                  onSelect={(currentValue) => {
                    handleSelectCountry(currentValue);

                    setOpen(false);
                  }}
                >
                  {country.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
