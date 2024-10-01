import { ERROR_ANIMATIONS } from "@/assets/animations";
import Lottie from "lottie-react";

const NotFoundAnimation = () => {
  return (
    <div className="mx-auto lg:w-[900px] max-sm:h-[280px]">
      <Lottie animationData={ERROR_ANIMATIONS["notFound"]} />
    </div>
  );
};

export default NotFoundAnimation;
