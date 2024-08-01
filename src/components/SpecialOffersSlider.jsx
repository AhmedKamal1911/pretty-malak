import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { specialOffers } from "@/data";
import { SpecialOfferCard } from ".";

// import required modules
const SpecialOffersSlider = () => {
  return (
    <div className="h-[400px]">
      <Swiper
        breakpoints={{
          // when window width is >= 640px (Tailwind: sm)
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 768px (Tailwind: md)
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px (Tailwind: lg)
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 1280px (Tailwind: xl)
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        speed={1000}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        {specialOffers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <SpecialOfferCard {...offer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffersSlider;
