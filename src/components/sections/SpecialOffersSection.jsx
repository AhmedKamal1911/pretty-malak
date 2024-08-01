import { SectionHeader, SpecialOffersSlider } from "..";

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
          <SpecialOffersSlider />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
