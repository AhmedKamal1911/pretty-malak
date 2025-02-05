import { useState } from "react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { getStrapiMediaURL } from "@/utils/getStrapiMediaUrl";

const TripSlider = ({ imagesList }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log({ active: thumbsSwiper?.activeIndex });
  return (
    <div className="select-none mb-10">
      <div className="aspect-[6/3.8]">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 h-full"
          lazy={"true"}
        >
          {imagesList.map(({ url, id }) => (
            <SwiperSlide key={id} className="active:cursor-grab">
              <img
                src={getStrapiMediaURL(url)}
                className="h-full object-cover w-full"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="aspect-[4/0.8] mt-2">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={5}
          slidesPerView={3}
          breakpoints={{
            // when window width is >= 640px (Tailwind: sm)
            640: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper h-full"
        >
          {imagesList.map(({ url, id }) => (
            <SwiperSlide key={id} className="opacity-slide active:cursor-grab">
              <img
                src={getStrapiMediaURL(url)}
                className="h-full object-cover w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TripSlider;
