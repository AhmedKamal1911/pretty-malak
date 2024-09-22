import {
  BookTripForm,
  Loading,
  QuestionsAccordion,
  TourOverviewDetails,
  TourPlanBox,
  TripBanner,
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
import useSectionInView from "@/hooks/useSectionInView";
import {
  fetchClientQuestions,
  fetchRelatedTrips,
  fetchTripData,
} from "@/services/trips/queries";

import { format, isValid, parse } from "date-fns";
import { useTranslation } from "react-i18next";

import { MdMap, MdOutlineWatchLater } from "react-icons/md";
import { useParams } from "react-router-dom";

const Trip = () => {
  const { id: tripId } = useParams();
  const { t } = useTranslation("global");
  const { ref, inView } = useSectionInView();
  const { data } = useQueryWithLocale({
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
    slug,
    // offer,

    type,
  } = data?.data ?? {};

  const imagesList = imgs?.data ?? [];

  const {
    data: relatedTripsData,
    isFetching,
    error: relatedTripsError,
  } = useQueryWithLocale({
    queryKey: ["relatedTrips", type, slug], // Object form for query key
    queryFn: async () => await fetchRelatedTrips(type, slug), // Function to fetch data
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
      <TripBanner
        t={t}
        bannerImg={imagesList[0]?.url}
        title={title}
        type={type}
      />
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
            <div
              ref={ref}
              className="mt-10 flex flex-col gap-3 overflow-hidden"
            >
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
                  allRelatedTrips.slice(0, 5).map((trip, i) => (
                    <div
                      key={trip.id}
                      className="max-[300px]:h-[300px] h-[350px] "
                    >
                      <TripCard
                        inView={inView}
                        i={i}
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
