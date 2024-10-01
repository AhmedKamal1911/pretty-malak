import { loadingAnimationData } from "@/assets/animations";
import Lottie from "lottie-react";

const FetchTripsLoader = () => {
  return (
    <Lottie className="max-w-[500px]" animationData={loadingAnimationData} />
  );
};

export default FetchTripsLoader;
