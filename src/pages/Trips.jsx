import { SectionHeader, TripCard } from "@/components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/SelectMenu";

import { allTrips, tripsTypes } from "@/data";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";

const Trips = () => {
  const [tripType, setTripType] = useState("");
  const onTripValueChange = (value) => {
    console.log(value);
    setTripType(value);
  };
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
          <SectionHeader subTitle="All Trips" introText="Explore Our Trips" />
          <Select onValueChange={onTripValueChange}>
            <SelectTrigger className="w-[180px] text-[17px]">
              <SelectValue placeholder="Select Trip" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {tripsTypes.map(({ label, value }, i) => (
                <SelectItem
                  key={i}
                  value={value}
                  className="text-[17px] cursor-pointer hover:bg-[#ebeaea] transition-all"
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          <AnimatePresence>
            {tripType !== ""
              ? allTrips
                  .filter((offer) => offer.type === tripType)
                  .map((offer) => (
                    <div key={offer.id} className="h-[400px]">
                      <TripCard {...offer} img={offer.imgs[0]} />
                    </div>
                  ))
              : allTrips.map((offer) => (
                  <div key={offer.id} className="h-[400px]">
                    <TripCard {...offer} img={offer.imgs[0]} />
                  </div>
                ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Trips;
