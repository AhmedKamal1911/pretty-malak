import {
  BookTripForm,
  Loading,
  TourOverviewDetails,
  TourPlanBox,
  TripBanner,
  TripCard,
  TripDetail,
  TripDetailsBox,
  TripNavigation,
  TripOverview,
  TripPriceDetail,
  TripQuestions,
  TripReviewBox,
  TripSlider,
} from "@/components";

import { fetchRelatedTrips, fetchTripData } from "@/services/trips/queries";
import { MdMap, MdOutlineWatchLater } from "react-icons/md";
import { SkeletonLoaderCard } from "@/components/feedback";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import useQueryWithLocale from "@/hooks/useQueryWithLocale";
import useScrollToTop from "@/hooks/useScrollToTop";
import useSectionInView from "@/hooks/useSectionInView";

const Trip = () => {
  const { id: tripId } = useParams();
  const { t } = useTranslation("global");
  const { ref, inView } = useSectionInView();
  const { data: trip } = useQueryWithLocale({
    queryKey: ["trip", tripId], // Object form for query key
    queryFn: () => fetchTripData(tripId), // Function to fetch data
  });
  const {
    data: relatedTripsData,
    isFetching,
    error: relatedTripsError,
  } = useQueryWithLocale({
    queryKey: ["relatedTrips", trip?.type, trip?.slug], // Object form for query key
    queryFn: async () => await fetchRelatedTrips(trip?.type, trip?.slug), // Function to fetch data
  });
  const allRelatedTrips = relatedTripsData?.data ?? [];

  console.log({ relatedTripsData });
  useScrollToTop();

  return (
    <div className="min-h-screen py-[72px] bg-light">
      <TripBanner
        t={t}
        bannerImg={trip?.imgs.data[0]?.url}
        title={trip?.title}
        type={trip?.type}
      />
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5 mt-16">
          <div className="lg:w-[70%]">
            <TripNavigation />
            <div className="my-8">
              <div className="flex items-center flex-col gap-5 lg:gap-0 lg:flex-row justify-between my-12">
                <div className="flex flex-wrap justify-center gap-5">
                  <TripDetail
                    detail={t(`tripInfo.tripTime.${trip?.time}`)}
                    icon={<MdOutlineWatchLater className="text-main w-7 h-7" />}
                  />
                  <TripDetail
                    detail={`${t("tripInfo.toursFrom")} ${trip?.tourFrom}`}
                    icon={<MdMap className="text-main w-7 h-7" />}
                  />
                </div>

                <div className="flex  items-center justify-center flex-wrap gap-5">
                  <TripPriceDetail
                    price={trip?.adultPrice}
                    age={t("tripInfo.priceForAdultText")}
                  />
                  <TripPriceDetail
                    price={trip?.childPrice}
                    age={t("tripInfo.priceForChildText")}
                  />
                  <TripPriceDetail
                    price={0}
                    age={t("tripInfo.priceForBabyText")}
                  />
                </div>
              </div>
              <TripSlider imagesList={trip?.imgs.data ?? []} />
              <TripOverview desc={trip?.desc} title={trip?.title} />
              {/* Info Box */}
              <div className="border divide-y-2 mb-10" id="info">
                <TripDetailsBox
                  tour={trip?.title}
                  tourFrom={trip?.tourFrom}
                  departureTime={trip?.departureTime}
                  departureTimeSystem={trip?.departureTime}
                  returnTime={trip?.returnTime}
                  returnTimeSystem={trip?.returnTime}
                  tripDays={trip?.tripDays}
                  maxGuests={trip?.maxGuests}
                />
                <TourOverviewDetails
                  list={trip?.highlights}
                  label={t("tripInfo.tripOverviewDetails.highlightsText")}
                />
                <TourOverviewDetails
                  list={trip?.includedServices}
                  label={t("tripInfo.tripOverviewDetails.includedServicesText")}
                />
                <TourOverviewDetails
                  list={trip?.notIncluded}
                  label={t("tripInfo.tripOverviewDetails.notIncludedText")}
                  status="cross"
                />
                <TourOverviewDetails
                  list={trip?.dontForget}
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
                  {trip?.tourPlan?.map(({ name, id }) => (
                    <TourPlanBox key={id} plan={name} />
                  ))}
                </div>
              </div>
              {/* Questions BOX */}
              <div className="mb-10" id="faq">
                <TripQuestions />
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
            <BookTripForm tripSlug={trip?.slug} />
            <div
              ref={ref}
              className="mt-10 flex flex-col gap-3 overflow-hidden"
            >
              <h2 className="text-3xl text-main mb-10">
                {t("tripInfo.relatedTripsSubTitle")}
              </h2>

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
