import { Scrollbar, A11y, EffectFade, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { heroSliderImages } from "@/data";
import useMediaQuery from "@/hooks/useMediaQuery";
const HeroSlider = () => {
  const isMedScreen = useMediaQuery("(max-width: 767px)");

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
      >
        {heroSliderImages.map((img, i) => (
          <SwiperSlide
            key={i}
            className="w-full swiper-slide-opacity before:absolute before:bg-[#0a0a0a49] before:inset-0 before:z-[5]"
          >
            <img
              src={isMedScreen ? img.small : img.large}
              className={`w-full h-full animate-smoothScale ${
                i === 0
                  ? "object-[-600px_center]"
                  : i === 1
                  ? ""
                  : "object-[-350px_center]"
              } sm:object-center object-cover`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
