import { Scrollbar, A11y, EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

// import { heroSliderImages } from "@/data";
// import useMediaQuery from "@/hooks/useMediaQuery";
import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";
const HeroSlider = ({ heroImagesList }) => {
  // const isMedScreen = useMediaQuery("(max-width: 767px)");
  // const isHeightSmall = useMediaQuery("(min-height: 470px)");

  return (
    <div className="h-full">
      <Swiper
        className="select-none h-full "
        modules={[Scrollbar, A11y, EffectFade, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1400}
        loop
        slidesPerView={1}
        scrollbar={{ draggable: true }}
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
