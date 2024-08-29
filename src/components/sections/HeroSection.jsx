// Import Swiper styles

import { NavLink } from "react-router-dom";
import { HeroSlider } from "..";
import { fetchHeroSectionInfo } from "@/services/trips/queries";

import useQueryWithLocale from "@/hooks/useQueryWithLocale";
import { useLanguage } from "@/contexts/LanguageProvider";
import { cn } from "@/utils/cn";

const HeroSection = () => {
  const { data } = useQueryWithLocale({
    queryKey: ["heroSection"],
    queryFn: fetchHeroSectionInfo,
  });
  const { selectedLanguage } = useLanguage();

  const heroButton = data?.heroButton;
  const heroImagesList = data?.heroImages.data;
  const heroHeading = data?.heading ?? "Get the trip of your dreams";

  return (
    <section className="h-screen relative">
      <HeroSlider heroImagesList={heroImagesList} />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 px-4 text-center w-full select-none">
        <div className="flex flex-col gap-3 ">
          <h1
            className={cn(
              "text-white sm:text-[90px] lg:text-9xl m-auto w-[1100px] max-w-full font-bold !leading-[1.3]",
              {
                "text-[36px] min-[376px]:text-[45px]":
                  selectedLanguage.languageName === "ru",
                "text-5xl": selectedLanguage.languageName !== "ru",
              }
            )}
          >
            {heroHeading}
          </h1>
          <NavLink
            to={heroButton?.url}
            className="p-3 text-xl bg-[#03030356] w-fit m-auto text-white rounded-sm hover:shadow-lighter transition-all"
          >
            {heroButton?.text ?? "discover tours"}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
