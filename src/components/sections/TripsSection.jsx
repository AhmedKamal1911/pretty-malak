// import { allTrips } from "@/data";
import { SectionHeader, TripCard } from "..";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTrips } from "@/services/trips/queries";

const TripsSection = () => {
  const {
    data: tripsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tripsSection"], // Object form for query key
    queryFn: fetchAllTrips, // Function to fetch data
  });

  const allTrips = tripsData?.data ?? [];

  return (
    <section className="py-20">
      <div className="container h-full">
        <SectionHeader
          subTitle="our trips"
          introText="take a look to our trips"
        />
        <Button asChild variant="primary">
          <NavLink to="/trips">Show All</NavLink>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 relative z-10">
          <AnimatePresence>
            {allTrips.map((trip) => (
              <div key={trip.id} className="h-[400px]">
                <TripCard {...trip} img={trip?.imgs.data?.[0]?.url} />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TripsSection;
