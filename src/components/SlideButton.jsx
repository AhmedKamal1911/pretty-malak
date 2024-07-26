import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const SlideButton = ({ type }) => {
  return (
    <div
      className={`swiper-button-${type} hidden lg:flex bg-[#eaecec48] z-[999] w-[40px] h-[40px] border border-1  items-center justify-center -translate-y-1/2  absolute top-1/2 ${type}-2 z-[999] text-white`}
    >
      {type === "left" ? <FaArrowLeft /> : <FaArrowRight />}
    </div>
  );
};

export default SlideButton;
