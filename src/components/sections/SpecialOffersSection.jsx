// import { specialTrips } from "@/data";
import { SectionHeader, TripsSlider } from "..";
import { fetchSpecialTrips } from "@/services/trips/queries";
import { useQuery } from "@tanstack/react-query";

const SpecialOffersSection = () => {
  const {
    data: tripsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trips"], // Object form for query key
    queryFn: fetchSpecialTrips, // Function to fetch data
  });

  const specialTrips = tripsData?.data ?? [];
  return (
    <section className="py-10">
      <div className="container">
        <SectionHeader
          className=""
          subTitle="Special Offers"
          introText="Get very special offers on trips"
        />
        <div className="mt-10">
          <TripsSlider className="h-[400px]" tripsList={specialTrips} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
