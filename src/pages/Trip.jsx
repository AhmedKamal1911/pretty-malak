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
import useQueryWithLocale from "@/hooks/useQueryWithLocale";

import useScrollToTop from "@/hooks/useScrollToTop";
import {
  fetchClientQuestions,
  fetchRelatedTrips,
  fetchTripData,
} from "@/services/trips/queries";
import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";

import { format, isValid, parse } from "date-fns";
import { useTranslation } from "react-i18next";

import { IoWatchOutline } from "react-icons/io5";
import { MdMap, MdOutlineWatchLater } from "react-icons/md";
import { useParams } from "react-router-dom";

const Trip = () => {
  const { id: tripId } = useParams();
  const { t } = useTranslation("global");
  const { data, isLoading, error } = useQueryWithLocale({
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

    type,
  } = data?.data ?? {};

  const imagesList = imgs?.data ?? [];

  const {
    data: relatedTripsData,
    isFetching,
    error: relatedTripsError,
  } = useQueryWithLocale({
    queryKey: ["relatedTrips", type, tripId], // Object form for query key
    queryFn: async () => await fetchRelatedTrips(type, tripId), // Function to fetch data
  });
  const allRelatedTrips = relatedTripsData?.data ?? [];

  const { data: clientQuestionData } = useQueryWithLocale({
    queryKey: ["clientQuestions"],
    queryFn: fetchClientQuestions,
  });
  const clientQuestionsList = clientQuestionData?.clientQuestionsList;
  console.log({ relatedTripsData });
  useScrollToTop();

  // Convert and format departureTime and returnTime
  const formatTime = (time) => {
    if (!time) return "N/A"; // Handle undefined or null time values

    const parsedTime = parse(time, "HH:mm:ss.SSS", new Date());
    if (isValid(parsedTime)) {
      return format(parsedTime, "hh:mm");
    } else {
      console.error("Invalid time format:", time);
      return "Invalid Time";
    }
  };
  console.log(formatTime(departureTime));
  // Function to format time and return only the timing system (AM/PM)
  const getTimingSystem = (time) => {
    if (!time) return "N/A"; // Handle undefined or null time values

    const parsedTime = parse(time, "HH:mm:ss.SSS", new Date());
    if (isValid(parsedTime)) {
      return format(parsedTime, "a"); // 'a' returns AM or PM
    } else {
      console.error("Invalid time format:", time);
      return "Invalid Time";
    }
  };

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
          <h5 className="text-4xl text-main mb-5">
            {t(`tripInfo.types.${type}`)}
          </h5>
          <h2 className="text-4xl lg:text-6xl text-white !leading-[1.4]">
            {title}
          </h2>
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
                    detail={t(`tripInfo.tripTime.${time}`)}
                    icon={<MdOutlineWatchLater className="text-main w-7 h-7" />}
                  />
                  <TripDetail
                    detail={`${t("tripInfo.toursFrom")} ${tourFrom}`}
                    icon={<MdMap className="text-main w-7 h-7" />}
                  />
                </div>

                <div className="flex flex-col items-center lg:flex-row gap-5">
                  <TripPriceDetail
                    price={adultPrice}
                    age={t("tripInfo.priceForAdultText")}
                  />
                  <TripPriceDetail
                    price={childPrice}
                    age={t("tripInfo.priceForChildText")}
                  />
                </div>
              </div>
              <TripSlider imagesList={imagesList} />
              <TripOverview desc={desc} title={title} />
              {/* Info Box */}
              <div className="border divide-y-2 mb-10" id="info">
                <TripDetailsBox
                  tour={title}
                  tourFrom={tourFrom}
                  departureTime={formatTime(departureTime)}
                  departureTimeSystem={getTimingSystem(departureTime)}
                  returnTime={formatTime(returnTime)}
                  returnTimeSystem={getTimingSystem(returnTime)}
                  tripDays={tripDays}
                  maxGuests={maxGuests}
                />

                <TourOverviewDetails
                  list={highlights}
                  label={t("tripInfo.tripOverviewDetails.highlightsText")}
                />
                <TourOverviewDetails
                  list={includedServices}
                  label={t("tripInfo.tripOverviewDetails.includedServicesText")}
                />
                <TourOverviewDetails
                  list={notIncluded}
                  label={t("tripInfo.tripOverviewDetails.notIncludedText")}
                  status="cross"
                />
                <TourOverviewDetails
                  list={dontForget}
                  label={t("tripInfo.tripOverviewDetails.dontForgetText")}
                  status="info"
                />
              </div>
              {/* Tour PLAN BOX */}
              <div className="mb-10" id="tour-plan">
                <TripOverview title={t("tripInfo.tourPlanIntroText")} />
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
                <TripOverview title={t("tripInfo.questionsIntroText")} />
                <QuestionsAccordion questionsList={clientQuestionsList} />
              </div>
              <div id="reviews">
                <TripOverview title={t("tripInfo.clientReviews.introText")} />
                <TripReviewBox
                  desc={t("tripInfo.clientReviews.desc")}
                  buttonLabel={t("tripInfo.clientReviews.reviewButtonLabel")}
                />
              </div>
            </div>
          </div>
          {/* Form AND RELATED TRIPS */}
          <div className="lg:w-[30%]">
            <BookTripForm />
            <div className="mt-10 flex flex-col gap-3 overflow-hidden">
              <h2 className="text-3xl text-main mb-10">
                {t("tripInfo.relatedTripsSubTitle")}
              </h2>
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
                    {t("tripInfo.emptyRelatedTripsText")}
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
