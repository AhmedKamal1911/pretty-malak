import { networkError } from "@/assets/animations";
import Lottie from "lottie-react";

const NetworkErrorAnimation = () => {
  return (
    <div className="lg:w-[500px]">
      <Lottie animationData={networkError} />
    </div>
  );
};

export default NetworkErrorAnimation;
