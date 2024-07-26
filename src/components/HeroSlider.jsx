import { slide1 } from "@/assets";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { SlideButton } from ".";
import { heroSliderImages } from "../../data";
const HeroSlider = () => {
  return (
    <div className="h-full">
      <Swiper
        className="select-none h-full "
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1400}
        loop
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-right",
          prevEl: ".swiper-button-left",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect="fade"
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {heroSliderImages.map(({ img }, i) => (
          <SwiperSlide
            key={i}
            className="w-full swiper-slide-opacity before:absolute before:bg-[#1111116e] before:inset-0 before:z-[5]"
          >
            <img src={img} className="w-full h-full object-cover" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <SlideButton type="left" />
      <SlideButton type="right" />
    </div>
  );
};

export default HeroSlider;
