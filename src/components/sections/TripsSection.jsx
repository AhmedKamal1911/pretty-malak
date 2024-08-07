import { allTrips } from "@/data";
import { SectionHeader, TripsSlider } from "..";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";

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

        <div className="flex flex-col xl:flex-row  gap-10 mt-20 justify-center overflow-hidden h-full">
          <div className="xl:w-[300px]">
            <TripsSlider
              className="h-[700px] lg:h-[900px]"
              direction="vertical"
              isPaginated={true}
              isAutoPlay={false}
              tripsList={allTrips}
            />
          </div>
          <div className="flex flex-col flex-1 gap-5 justify-center">
            <div className="h-[400px] w-full  xl:w-[824px]">
              <TripsSlider className="h-full" tripsList={allTrips} />
            </div>
            <div className="h-[400px] w-full xl:w-[824px]">
              <TripsSlider
                className="h-full"
                tripsList={allTrips}
                isReversed={true}
              />
            </div>
          </div>
          <div className="xl:w-[300px]">
            <TripsSlider
              isAutoPlay={false}
              className="h-[700px] lg:h-[900px]"
              direction="vertical"
              isPaginated={true}
              isReversed={true}
              tripsList={allTrips}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripsSection;
