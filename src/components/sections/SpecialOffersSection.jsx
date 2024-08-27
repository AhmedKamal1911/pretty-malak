// import { specialTrips } from "@/data";
import useQueryWithLocale from "@/hooks/useQueryWithLocale";
import { Loading, SectionHeader, TripsSlider } from "..";
import { fetchSpecialTrips } from "@/services/trips/queries";
import { useTranslation } from "react-i18next";

const SpecialOffersSection = () => {
  const { t } = useTranslation("global");
  const {
    data: tripsData,
    isFetching,
    error,
  } = useQueryWithLocale({
    queryKey: ["trips"], // Object form for query key
    queryFn: fetchSpecialTrips, // Function to fetch data
  });
  const specialTrips = tripsData?.data ?? [];
  return (
    <section className="py-10">
      <div className="container">
        <SectionHeader
          className=""
          subTitle={t("homePage.specialOffersSection.subTitle")}
          introText={t("homePage.specialOffersSection.introText")}
        />
        <div className="mt-10">
          <Loading
            isFetching={isFetching}
            error={error}
            loadingElementClassName="h-[20vh]"
            errorElementClassName="h-[20vh] "
          >
            <TripsSlider
              className="h-[300px] sm:h-[400px]"
              tripsList={specialTrips}
            />
          </Loading>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
