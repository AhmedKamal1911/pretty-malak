import { NotFoundAnimationData } from "@/assets/animations";
import Lottie from "lottie-react";

const NotFoundAnimation = () => {
  return (
    <div className="mx-auto lg:w-[900px] max-sm:h-[280px]">
      <Lottie animationData={NotFoundAnimationData} />
    </div>
  );
};

export default NotFoundAnimation;
