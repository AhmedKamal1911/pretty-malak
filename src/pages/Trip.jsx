import {
  BookTripForm,
  Loading,
  QuestionsAccordion,
  TourOverviewDetails,
  TourPlanBox,
  TripCard,
  TripDetail,
  TripDetailsBox,
  TripNavigation,
  TripOverview,
  TripPriceDetail,
  TripReviewBox,
  TripSlider,
} from "@/components";
import { SkeletonLoaderCard } from "@/components/feedback";

import useScrollToTop from "@/hooks/useScrollToTop";
import { fetchRelatedTrips, fetchTripData } from "@/services/trips/queries";
import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";

import { useQuery } from "@tanstack/react-query";

import { IoWatchOutline } from "react-icons/io5";
import { MdMap } from "react-icons/md";
import { useParams } from "react-router-dom";

const Trip = () => {
  const { id: tripId } = useParams();
  useScrollToTop();

  const { data, isLoading, error } = useQuery({
    queryKey: ["trip", tripId], // Object form for query key
    queryFn: async () => await fetchTripData(tripId), // Function to fetch data
  });

  const {
    departureTime,
    imgs,
    desc,
    dontForget,
    highlights,
    includedServices,
    maxGuests,
    notIncluded,
    adultPrice,
    childPrice,
    returnTime,
    time,
    title,
    tourFrom,
    tourPlan,
    tripDays,
    // offer,
    tour,

    type: { typeName } = {},
  } = data?.data ?? {};

  const imagesList = imgs?.data ?? [];

  const {
    data: relatedTripsData,
    isFetching,
    error: relatedTripsError,
  } = useQuery({
    queryKey: ["relatedTrips", typeName, tripId], // Object form for query key
    queryFn: async () => await fetchRelatedTrips(typeName, tripId), // Function to fetch data
  });

  const allRelatedTrips = relatedTripsData?.data ?? [];

  return (
    <div className="min-h-screen py-[72px] bg-light">
      <div className="h-[300px] relative after:inset-0 after:bg-[#0c0c0c81] after:absolute">
        <div className="h-full">
          <img
            src={getStrapiMediaURL(imagesList[0]?.url)}
            alt=""
            className="h-full w-full object-cover object-[0%,60%]"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40 text-center w-full xl:w-[40%] px-2">
          <h5 className="text-4xl text-main">{typeName}</h5>
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
                  <TripPriceDetail price={adultPrice} age={"adult"} />
                  <TripPriceDetail
                    price={childPrice}
                    age={"child * Till 11 Years"}
                  />
                </div>
              </div>
              <TripSlider imagesList={imagesList} />
              <TripOverview desc={desc} title={tour} />
              {/* Info Box */}
              <div className="border divide-y-2 mb-10" id="info">
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
              <div className="mb-10" id="tour-plan">
                <TripOverview title={"Tour Plan"} />
                <div
                  className="border rounded-md overflow-hidden"
                  style={{
                    counterReset: "feature-counter",
                  }}
                >
                  {tourPlan?.map(({ name, id }) => (
                    <TourPlanBox key={id} plan={name} />
                  ))}
                </div>
              </div>
              {/* Questions BOX */}
              <div className="mb-10" id="faq">
                <TripOverview title={"Frequently Asked Questions"} />
                <QuestionsAccordion />
              </div>
              <div id="reviews">
                <TripOverview title={"Client Reviews"} />
                <TripReviewBox />
              </div>
            </div>
          </div>
          {/* Form AND RELATED TRIPS */}
          <div className="lg:w-[30%]">
            <BookTripForm />
            <div className="mt-10 flex flex-col gap-3 overflow-hidden">
              <h2 className="text-3xl text-main mb-10">Related Trips</h2>
              {/* TODO:SKELETON LOADER */}
              <Loading
                isFetching={isFetching}
                error={relatedTripsError}
                loadingElement={<SkeletonLoaderCard />}
                loadingElementClassName="h-[68vh] sm:h-[120vh] lg:h-[95vh]"
              >
                {allRelatedTrips.length >= 1 ? (
                  allRelatedTrips.map((trip, i) => (
                    <div
                      key={trip.id}
                      className="max-[300px]:h-[300px] h-[350px] "
                    >
                      <TripCard
                        {...trip}
                        img={trip?.imgs.data[0]?.url}
                        count={i + 1}
                      />
                    </div>
                  ))
                ) : (
                  <span className="text-4xl text-center text-yellow-500">
                    There is no related trips
                  </span>
                )}
              </Loading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
