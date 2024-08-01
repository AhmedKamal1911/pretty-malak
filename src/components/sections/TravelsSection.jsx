import { SectionHeader, TripsSlider } from "..";

import { specialOffers } from "@/data";

const TravelsSection = () => {
  return (
    <section className="py-20">
      <div className="container h-full">
        <SectionHeader
          subTitle="our trips"
          introText="take a look to our trips"
        />
        <div className="flex flex-col xl:flex-row  gap-10 mt-20 justify-center overflow-hidden h-full">
          <div className="xl:w-[300px]">
            <TripsSlider
              className="h-[700px] lg:h-[900px]"
              direction="vertical"
              isAutoPlay={false}
              tripsList={specialOffers}
            />
          </div>
          <div className="flex flex-col flex-1 gap-5 justify-center">
            <div className="h-[400px] w-full  xl:w-[824px]">
              <TripsSlider className="h-full" tripsList={specialOffers} />
            </div>
            <div className="h-[400px] w-full xl:w-[824px]">
              <TripsSlider
                className="h-full"
                tripsList={specialOffers}
                isReversed={true}
              />
            </div>
          </div>
          <div className="xl:w-[300px]">
            <TripsSlider
              isAutoPlay={false}
              className="h-[700px] lg:h-[900px]"
              direction="vertical"
              isReversed={true}
              tripsList={specialOffers}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelsSection;
