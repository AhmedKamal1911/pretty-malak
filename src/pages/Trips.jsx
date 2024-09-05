import { Loading, SectionHeader, SelectError, TripCard } from "@/components";

import { FetchTripsTypesLoader } from "@/components/feedback";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/SelectMenu";
import useQueryWithLocale from "@/hooks/useQueryWithLocale";

import useScrollToTop from "@/hooks/useScrollToTop";
import useSectionInView from "@/hooks/useSectionInView";
import { fetchTrips, fetchTripTypes } from "@/services/trips/queries";

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const Trips = () => {
  const { ref, inView } = useSectionInView();
  const [tripType, setTripType] = useState("all");
  const { t } = useTranslation("global");
  const {
    data: tripsData,
    isFetching,
    error,
  } = useQueryWithLocale({
    queryKey: ["trips", tripType], // Object form for query key
    queryFn: () => fetchTrips(tripType), // Function to fetch data
  });

  const allTrips = tripsData?.data ?? [];
  console.log("all trips", allTrips);
  const {
    data: tripsTypes,
    isFetching: tripsTypesIsFetching,

    error: tripsTypesError,
  } = useQuery({
    queryKey: ["tripsTypes"], // Object form for query key
    queryFn: fetchTripTypes, // Function to fetch data
  });

  const onTripValueChange = (value) => {
    setTripType(value);
  };

  useScrollToTop();
  return (
    <div ref={ref} className="min-h-screen py-24">
      <div className="container">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between">
          <SectionHeader
            className="space-y-4"
            subTitle={t("tripsPage.subTitle")}
            introText={t("tripsPage.introText")}
          />
          <Select onValueChange={onTripValueChange}>
            <SelectTrigger
              disabled={tripsTypesIsFetching ? true : Boolean(tripsTypesError)}
              className="w-[180px] text-[17px]"
            >
              <Loading
                isFetching={tripsTypesIsFetching}
                loadingElement={<FetchTripsTypesLoader />}
                error={tripsTypesError}
                errorElement={<SelectError />}
              >
                <SelectValue
                  placeholder={t("tripsPage.selectTypeMenu.title")}
                />
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
                  {t(`tripsPage.selectTypeMenu.types.${type}`)}
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
                    inView={inView}
                    i={i}
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
