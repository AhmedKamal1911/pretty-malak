import { specialOffers } from "@/data";
import { SectionHeader, TripsSlider } from "..";

const SpecialOffersSection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <SectionHeader
          className=""
          subTitle="Special Offers"
          introText="Get very special offers on trips"
        />
        <div className="mt-10">
          <TripsSlider className="h-[400px]" tripsList={specialOffers} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
