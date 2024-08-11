import {
  BookTripForm,
  QuestionsAccordion,
  TourOverviewDetails,
  TourPlanBox,
  TripDetail,
  TripDetailsBox,
  TripNavigation,
  TripOverview,
  TripPriceDetail,
  TripReviewBox,
  TripSlider,
  TripsSlider,
} from "@/components";
import { allTrips } from "@/data";

import { IoWatchOutline } from "react-icons/io5";
import { MdMap } from "react-icons/md";
import { useParams } from "react-router-dom";

const Trip = () => {
  const { id: tripId } = useParams();
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
    type: currentTripType,
  } = allTrips.find(({ id }) => id == tripId);

  const relatedTrips = allTrips.filter(
    ({ type: tripType }) => tripType === currentTripType
  );

  const sliderBreakPoints = {
    // when window width is >= 640px (Tailwind: sm)
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px (Tailwind: md)
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1024px (Tailwind: lg)
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 1280px (Tailwind: xl)
    1280: {
      slidesPerView: relatedTrips.length < 3 ? relatedTrips.length : 5,
      spaceBetween: 30,
    },
  };

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
          <h5 className="text-4xl text-main">{currentTripType}</h5>
          <h2 className="text-4xl lg:text-6xl text-white">{title}</h2>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5 mt-16">
          <div className="lg:w-[70%]">
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
              {/* Info Box */}
              <div className="border divide-y-2 mb-10">
                <TripDetailsBox
                  tour={tour}
                  tourFrom={tourFrom}
                  departureTime={departureTime}
                  returnTime={returnTime}
                  tripDays={tripDays}
                  maxGuests={maxGuests}
                />

                <TourOverviewDetails list={highlights} label="highlights" />
                <TourOverviewDetails
                  list={includedServices}
                  label="included services"
                />
                <TourOverviewDetails
                  list={notIncluded}
                  label="not included"
                  status="cross"
                />
                <TourOverviewDetails
                  list={dontForget}
                  label="don't forget"
                  status="info"
                />
              </div>
              {/* Tour PLAN BOX */}
              <div className="mb-10">
                <TripOverview title={"Tour Plan"} />
                <div
                  className="border rounded-md overflow-hidden"
                  style={{
                    counterReset: "feature-counter",
                  }}
                >
                  {tourPlan.map((plan, i) => (
                    <TourPlanBox key={i} plan={plan} />
                  ))}
                </div>
              </div>
              {/* Questions BOX */}
              <div className="mb-10">
                <TripOverview title={"Frequently Asked Questions"} />
                <QuestionsAccordion />
              </div>
              <div>
                <TripOverview title={"Client Reviews"} />
                <TripReviewBox />
              </div>
            </div>
          </div>
          {/* Form AND RELATED TRIPS */}
          <div className="lg:w-[30%]">
            <BookTripForm />
            <div className="mt-10">
              <TripsSlider
                className="h-[700px] lg:h-[1800px]"
                direction="vertical"
                isPaginated={true}
                isAutoPlay={false}
                tripsList={relatedTrips}
                BreakPoints={sliderBreakPoints}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
