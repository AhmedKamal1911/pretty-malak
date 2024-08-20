import { Loading, SectionHeader, TripCard } from "@/components";
import { FetchTripsTypesLoader } from "@/components/feedback";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/SelectMenu";

import useScrollToTop from "@/hooks/useScrollToTop";
import { fetchTrips, fetchTripTypes } from "@/services/trips/queries";

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import { TfiFaceSad } from "react-icons/tfi";
const Trips = () => {
  const [tripType, setTripType] = useState("all");
  const {
    data: tripsData,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["trips", tripType], // Object form for query key
    queryFn: () => fetchTrips(tripType), // Function to fetch data
  });

  const allTrips = tripsData?.data ?? [];

  const {
    data: tripsTypes,
    isFetching: tripsTypesIsFetching,

    error: tripsTypesError,
  } = useQuery({
    queryKey: ["tripsTypes"], // Object form for query key
    queryFn: fetchTripTypes, // Function to fetch data
  });

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
            <SelectTrigger
              disabled={Boolean(tripsTypesError)}
              className="w-[180px] text-[17px]"
            >
              <Loading
                isFetching={tripsTypesIsFetching}
                loadingElement={<FetchTripsTypesLoader />}
                error={tripsTypesError}
                errorElement={
                  <div className="flex items-center gap-1">
                    <TfiFaceSad className="text-red-600 w-[18px] h-[18px]" />
                    <span className="text-red-600">Fetch Error</span>
                  </div>
                }
              >
                <SelectValue placeholder="Select type" />
              </Loading>
            </SelectTrigger>
            <SelectContent className="bg-white z-[800]">
              {tripsTypes?.map((type, i) => (
                <SelectItem
                  ref={(ref) => {
                    if (!ref) return;
                    ref.ontouchstart = (e) => e.preventDefault();
                  }}
                  key={i}
                  value={type}
                  className="text-[17px] cursor-pointer hover:bg-[#ebeaea] transition-all "
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Loading isFetching={isFetching} error={error}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 relative z-10">
            <AnimatePresence>
              {allTrips.map((trip, i) => (
                <div key={trip.id} className="h-[300px] sm:h-[400px] ">
                  <TripCard
                    {...trip}
                    img={trip?.imgs.data[0]?.url}
                    count={i + 1}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
        </Loading>
      </div>
    </div>
  );
};

export default Trips;
