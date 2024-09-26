import { loadingAnimationData } from "@/assets/animations";
import Lottie from "lottie-react";

const FetchTripsLoader = () => {
  return (
    <div className="lg:w-[800px]">
      <Lottie animationData={loadingAnimationData} />
    </div>
  );
};

export default FetchTripsLoader;
