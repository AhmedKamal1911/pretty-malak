// import { allTrips } from "@/data";
import { Loading, SectionHeader, TripCard } from "..";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";

import { fetchTrips } from "@/services/trips/queries";
import useQueryWithLocale from "@/hooks/useQueryWithLocale";
import { useTranslation } from "react-i18next";
import useSectionInView from "@/hooks/useSectionInView";

const TripsSection = () => {
  const { t } = useTranslation("global");
  const { ref, inView } = useSectionInView();
  console.log(inView);
  const {
    data: tripsData,
    isFetching,
    error,
  } = useQueryWithLocale({
    queryKey: ["tripsSection"], // Object form for query key
    queryFn: fetchTrips, // Function to fetch data
  });
  const allTrips = tripsData?.data ?? [];

  return (
    <section ref={ref} className="py-20">
      <div className="container h-full">
        <SectionHeader
          subTitle={t("homePage.tripsSection.subTitle")}
          introText={t("homePage.tripsSection.introText")}
        />
        <Button asChild variant="primary">
          <NavLink to="/trips" className="py-6 block !my-7">
            {t("homePage.tripsSection.tripsButtonLabel")}
          </NavLink>
        </Button>
        <Loading
          isFetching={isFetching}
          error={error}
          loadingElementClassName="h-[30vh]"
          errorElementClassName="h-[20vh]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 relative z-10">
            {allTrips.map((trip, i) => (
              <div key={trip.id} className="h-[300px] sm:h-[400px]">
                <TripCard
                  inView={inView}
                  {...trip}
                  i={i}
                  img={trip?.imgs.data?.[0]?.url}
                  count={i + 1}
                />
              </div>
            ))}
          </div>
        </Loading>
      </div>
    </section>
  );
};

export default TripsSection;
