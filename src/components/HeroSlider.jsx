import { A11y, EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";
const HeroSlider = ({ heroImagesList }) => {
  return (
    <div className="h-full">
      <Swiper
        className="select-none h-full "
        modules={[A11y, EffectFade, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1400}
        loop
        slidesPerView={1}
        effect="fade"
        lazy={"true"}
      >
        {heroImagesList?.map(({ url, id }) => (
          <SwiperSlide
            key={id}
            className="w-full swiper-slide-opacity before:absolute before:bg-[#0a0a0a49] before:inset-0 before:z-[5]"
          >
            <img
              src={getStrapiMediaURL(url)}
              loading="lazy"
              className={`w-full h-full animate-smoothScale sm:object-center object-cover`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
