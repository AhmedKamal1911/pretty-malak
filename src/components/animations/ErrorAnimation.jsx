import { errorAnimationData } from "@/assets/animations";
import Lottie from "lottie-react";

const ErrorAnimation = () => {
  return (
    <div>
      <Lottie animationData={errorAnimationData} />
    </div>
  );
};

export default ErrorAnimation;
