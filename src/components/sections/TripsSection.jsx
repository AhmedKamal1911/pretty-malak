// import { allTrips } from "@/data";
import { Loading, SectionHeader, TripCard } from "..";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchTrips } from "@/services/trips/queries";

const TripsSection = () => {
  const {
    data: tripsData,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["tripsSection"], // Object form for query key
    queryFn: fetchTrips, // Function to fetch data
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
        <Loading
          isFetching={isFetching}
          error={error}
          loadingElementClassName="h-[30vh]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 relative z-10">
            <AnimatePresence>
              {allTrips.map((trip) => (
                <div key={trip.id} className="h-[300px] sm:h-[400px]">
                  <TripCard {...trip} img={trip?.imgs.data?.[0]?.url} />
                </div>
              ))}
            </AnimatePresence>
          </div>
        </Loading>
      </div>
    </section>
  );
};

export default TripsSection;
