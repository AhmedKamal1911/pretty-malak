// Import Swiper styles

import { NavLink } from "react-router-dom";
import { HeroSlider } from "..";
import { fetchHeroSectionInfo } from "@/services/trips/queries";
import { useQuery } from "@tanstack/react-query";

const HeroSection = () => {
  const { data } = useQuery({
    queryKey: ["heroSection"], // Object form for query key
    queryFn: fetchHeroSectionInfo,
  });
  const heroButton = data?.heroButton;
  const heroImagesList = data?.heroImages.data;

  return (
    <section className="h-screen relative">
      <HeroSlider heroImagesList={heroImagesList} />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 px-4 text-center w-full select-none">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-[60px] md:text-8xl lg:text-9xl m-auto w-[1100px] max-w-full">
            Get the trip of your dreams
          </h1>
          <NavLink
            to={heroButton?.url}
            className="p-3  bg-[#03030356] w-fit m-auto text-white rounded-sm hover:shadow-lighter transition-all"
          >
            {heroButton?.text ?? "discover tours"}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
