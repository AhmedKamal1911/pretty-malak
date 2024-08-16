import { SectionHeader, TripCard } from "@/components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/SelectMenu";

import { tripsTypes } from "@/data";
import useScrollToTop from "@/hooks/useScrollToTop";
import { fetchAllTrips } from "@/services/trips/queries";

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";

const Trips = () => {
  const [tripType, setTripType] = useState("all");
  const {
    data: tripsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trips"], // Object form for query key
    queryFn: fetchAllTrips, // Function to fetch data
  });

  const allTrips = tripsData?.data ?? [];

  const onTripValueChange = (value) => {
    console.log("changed");

    setTripType(value);
  };
  useScrollToTop();
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
          <SectionHeader subTitle="All Trips" introText="Explore Our Trips" />
          <Select onValueChange={onTripValueChange}>
            <SelectTrigger className="w-[180px] text-[17px]">
              <SelectValue placeholder="all" />
            </SelectTrigger>
            <SelectContent
              ref={(ref) => {
                if (!ref) return;
                ref.ontouchstart = (e) => e.preventDefault();
              }}
              className="bg-white z-[800]"
            >
              {tripsTypes.map(({ label, value }, i) => (
                <SelectItem
                  key={i}
                  value={value}
                  className="text-[17px] cursor-pointer hover:bg-[#ebeaea] transition-all "
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 relative z-10">
          <AnimatePresence>
            {tripType !== "all"
              ? allTrips
                  .filter((trip) => trip.type === tripType)
                  .map((trip) => (
                    <div
                      key={trip.id}
                      className="max-[300px]:h-[300px] h-[400px] "
                    >
                      <TripCard {...trip} img={trip?.imgs.data[0]?.url} />
                    </div>
                  ))
              : allTrips.map((trip) => (
                  <div
                    key={trip.id}
                    className="max-[300px]:h-[300px] h-[400px] "
                  >
                    <TripCard {...trip} img={trip?.imgs.data[0]?.url} />
                  </div>
                ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Trips;
