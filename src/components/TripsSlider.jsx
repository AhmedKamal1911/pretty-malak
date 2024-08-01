import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { sliderBreakPoints } from "@/data";
import { TripCard } from ".";

// import required modules
const TripsSlider = ({
  className,
  tripsList,
  isReversed = false,
  delay = 3000,
  speed = 1000,
  direction = "horizontal",
  isAutoPlay = true,
}) => {
  return (
    <div className={className}>
      <Swiper
        breakpoints={sliderBreakPoints}
        direction={direction}
        {...(isAutoPlay && {
          autoplay: {
            delay: delay,
            disableOnInteraction: false,
            reverseDirection: isReversed,
          },
        })}
        loop
        pagination
        speed={speed}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full w-full"
      >
        {tripsList.map((trip) => (
          <SwiperSlide key={trip.id}>
            <TripCard {...trip} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TripsSlider;
