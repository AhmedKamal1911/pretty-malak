// Import Swiper styles

import { NavLink } from "react-router-dom";
import { HeroSlider } from "..";

const HeroSection = () => {
  return (
    <section className="h-screen relative">
      <HeroSlider />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 px-4 text-center w-full select-none">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-[60px] md:text-8xl lg:text-9xl m-auto w-[1100px] max-w-full">
            Get the trip of your dreams
          </h1>
          <NavLink
            to="/tours"
            className="p-3  bg-[#03030356] w-fit m-auto text-white rounded-sm hover:shadow-lighter transition-all"
          >
            Discover Tours
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
