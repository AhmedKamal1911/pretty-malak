import { useEffect, useRef, useState } from "react";
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
  const mainSwiperRef = useRef(null);

  useEffect(() => {
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      // Update Swiper to make sure it's correctly initialized
      mainSwiperRef.current.swiper.update();
    }
  }, [thumbsSwiper, imagesList]);

  return (
    <div className="select-none mb-10">
      <div className="h-[150px] min-[367px]:h-[250px] min-[600px]:h-[500px]">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 h-full"
          ref={mainSwiperRef}
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
      <div className="h-[70px] min-[367px]:h-[100px] min-[600px]:h-[150px] mt-2">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={5}
          slidesPerView={3}
          breakpoints={{
            // when window width is >= 640px (Tailwind: sm)
            640: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
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
