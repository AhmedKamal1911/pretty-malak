import { useState } from "react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const TripSlider = ({ imagesList }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="select-none mb-10">
      <div className="h-[150px] min-[367px]:h-[250px] min-[600px]:h-[500px] ">
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
        >
          {imagesList.map((img, i) => (
            <SwiperSlide key={i} className="active:cursor-grab">
              <img src={img} className="h-full object-cover w-full" />
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
          {imagesList.map((img, i) => (
            <SwiperSlide key={i} className="opacity-slide">
              <img src={img} className="h-full object-cover w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TripSlider;
