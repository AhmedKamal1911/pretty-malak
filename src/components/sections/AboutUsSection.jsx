import { realYacht, slideImg1, waveBg, wheel } from "@/assets";
import { NavLink } from "react-router-dom";
import { InfiniteSlider, SectionHeader } from "..";
import { travelCategories } from "@/data";
import { Button } from "../ui/Button";
import { useTranslation } from "react-i18next";

const AboutUsSection = () => {
  const { t } = useTranslation("global");
  return (
    <section className="bg-light overflow-hidden">
      <div className="relative px-4 min-[1400px]:ms-auto min-[1400px]:w-8/12 z-[1]  lg:overflow-visible">
        <div className="rounded-lg relative p-4 md:p-12 min-[1400px]:ps-[350px] min-[1400px]:py-28 min-[1400px]:pe-[100px] min-[1400px]:pb-[89px] h-full border border-1 min-[1400px]:w-fit bg-[#f4efec] outline-offset-[-20px] outline-main outline-[10px] outline-none">
          <div className="relative z-10 p-2 md:p-0">
            <SectionHeader
              className={"max-lg:text-center lg:w-[500px]"}
              subTitle={t("homePage.aboutUsSection.subTitle")}
              introText={t("homePage.aboutUsSection.introText")}
              desc={t("homePage.aboutUsSection.aboutDesc")}
            />

            <Button asChild variant="primary" className="py-5 px-4">
              <NavLink
                to="/about-us"
                className="p-2 bg-main text-white rounded-md mt-3 hover:scale-[0.95] transition-transform block w-fit mx-auto lg:mx-0"
              >
                {t("homePage.aboutUsSection.aboutButtonLabel")}
              </NavLink>
            </Button>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 mt-5 p-[10px] md:p-0">
              <div className="rounded-md overflow-hidden border-2 border-main">
                <img
                  src={slideImg1}
                  alt=""
                  className="w-[150px] h-[110px] object-cover"
                />
              </div>
              <div className="flex flex-col text-center">
                <span className="text-grayDesc text-xl">
                  {t("homePage.aboutUsSection.dateLabel")}
                </span>
                <strong className="text-5xl text-main">2005</strong>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url("${wheel}")` }}
            className="animate-infinite-spin origin-center-center  absolute end-[20px] top-[20px] lg:end-28 md:top-8 w-[144px] h-[163px] bg-no-repeat"
          />
          <div
            style={{ backgroundImage: `url("${waveBg}")` }}
            className="absolute inset-0 z-[2]"
          />
          <div
            style={{ backgroundImage: `url("${realYacht}")` }}
            className="animate-smoothAlternate md:z-[1] lg:absolute hidden lg:block md:inset-0  lg:top-0 min-[1400px]:start-[-500px] md:bg-contain md:bg-[80%]   min-[1400px]:h-[464px] min-[1400px]:w-[800px] min-[1400px]:z-40 md:bg-no-repeat"
          />
        </div>
      </div>
      <InfiniteSlider>
        {travelCategories.map((_, i) => {
          return (
            <span
              key={i}
              data-text={t(`homePage.infiniteSlider.${i}`)}
              className="text-6xl lg:text-8xl whitespace-nowrap stroke-fill transition-all duration-500 hover:before:bg-main before:transition-all before:duration-500 relative before:absolute before:start-[-20px] before:top-1/2 before:-translate-y-1/2 before:w-[10px] before:h-[10px] before:bg-black before:rounded-full after:content-[attr(data-text)] after:absolute after:inset-0 after:w-0 after:z-[1] after:transition-all after:duration-500 hover:after:w-full after:overflow-hidden"
            >
              {t(`homePage.infiniteSlider.${i}`)}
            </span>
          );
        })}
      </InfiniteSlider>
    </section>
  );
};

export default AboutUsSection;
