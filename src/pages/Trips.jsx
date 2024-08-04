import { TripCard } from "@/components";
import { specialOffers } from "@/data";

const Trips = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialOffers.map((offer) => (
            <div key={offer.id} className="h-[400px]">
              <TripCard {...offer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trips;
