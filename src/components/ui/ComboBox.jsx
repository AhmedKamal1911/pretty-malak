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

export function ComboboxDemo({ selectCountry, onSelectCountry }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectCountry);
  const handleSelectCountry = (country) => {
    setValue(country);
    onSelectCountry(country);
  };
  const country = countries.find((country) => country.name === value);
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
            {value !== "" ? (
              <img
                className="h-7 w-7 me-2"
                src={`https://flagsapi.com/${country?.code}/flat/64.png`}
              />
            ) : (
              <IoEarthSharp className="me-2 h-4 w-4 shrink-0 opacity-50 text-main" />
            )}

            {value ? country?.name : "Select Country..."}
          </div>
          <ChevronsUpDown className="ms-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[400px] min-w-full p-0 bg-white shadow-md">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty className="text-main p-3 text-center">
              No Country found.
            </CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  className={`p-3 hover:bg-[#dddcdc56] transition-all ${value === country.name ? "bg-gray-500" : ""}`}
                  key={country.code}
                  value={country.name}
                  onSelect={(currentValue) => {
                    handleSelectCountry(currentValue);

                    setOpen(false);
                  }}
                >
                  <img
                    className="h-7 w-7 me-2"
                    src={`https://flagsapi.com/${country.code}/flat/64.png`}
                  />
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
