import {
  BookTripForm,
  QuestionsAccordion,
  TourPlanBox,
  TripDetail,
  TripDetailsBox,
  TripNavigation,
  TripOverview,
  TripPriceDetail,
  TripSlider,
} from "@/components";
import { allTrips } from "@/data";

import { IoWatchOutline } from "react-icons/io5";
import { MdMap } from "react-icons/md";
import { useParams } from "react-router-dom";

const Trip = () => {
  const { id } = useParams();
  // console.log(id);
  const {
    departureTime,
    desc,
    dontForget,
    highlights,
    imgs,
    includedServices,
    maxGuests,
    notIncluded,
    price,
    returnTime,
    time,
    title,
    tourFrom,
    tourPlan,
    tripDays,
    offer,
    tour,
    type,
  } = allTrips.find(({ id }) => id === id);
  // const tripDetailsList = {
  //   names: ["tour", "tour from", "departure time", "trip days"],
  //   tripDetails: [tour, tourFrom, departureTime, tripDays, returnTime],
  // };

  // const highlightsList = {
  //   names: ["highlights"],
  //   tripDetails: highlights,
  // };

  return (
    <div className="min-h-screen py-[72px] bg-light">
      <div className="h-[300px] relative after:inset-0 after:bg-[#0c0c0c81] after:absolute">
        <div className="h-full">
          <img
            src={imgs[0]}
            alt=""
            className="h-full w-full object-cover object-[0%,60%]"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40 text-center w-full xl:w-[40%] px-2">
          <h5 className="text-4xl text-main">{type}</h5>
          <h2 className="text-4xl lg:text-6xl text-white">{title}</h2>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5 mt-16">
          <div className="flex-1  overflow-hidden">
            <TripNavigation />
            <div className="my-8">
              <div className="flex items-center flex-col gap-5 lg:gap-0 lg:flex-row justify-between my-12">
                <div className="flex flex-col  md:flex-row justify-center gap-5">
                  <TripDetail
                    detail={time}
                    icon={<IoWatchOutline className="text-main" />}
                  />
                  <TripDetail
                    detail={tourFrom}
                    icon={<MdMap className="text-main" />}
                  />
                </div>

                <div className="flex flex-col items-center lg:flex-row gap-5">
                  <TripPriceDetail price={price.adult} age={"adult"} />
                  <TripPriceDetail
                    price={price.child}
                    age={"child * Till 11 Years"}
                  />
                </div>
              </div>
              <TripSlider imagesList={imgs} />
              <TripOverview desc={desc} title={tour} />
              <div className="border divide-y-2 mb-10">
                {/* <TripDetailsBox detailsList={highlightsList} /> */}
              </div>
              <div className="mb-10">
                <TripOverview title={"Tour Plan"} />
                <div
                  className="border rounded-md"
                  style={{
                    counterReset: "feature-counter",
                  }}
                >
                  {tourPlan.map((plan, i) => (
                    <TourPlanBox key={i} plan={plan} />
                  ))}
                </div>
              </div>
              <div>
                <TripOverview title={"Frequently Asked Questions"} />
                <QuestionsAccordion />
              </div>
            </div>
          </div>
          <div className="lg:w-[30%]">
            <BookTripForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
