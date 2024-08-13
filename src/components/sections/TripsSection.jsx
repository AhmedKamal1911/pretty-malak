import { allTrips } from "@/data";
import { SectionHeader, TripCard } from "..";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";
import { AnimatePresence } from "framer-motion";

const TripsSection = () => {
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
            {allTrips.map((offer) => (
              <div key={offer.id} className="h-[400px]">
                <TripCard {...offer} img={offer.imgs[0]} />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TripsSection;
