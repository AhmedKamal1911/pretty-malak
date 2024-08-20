import { loading } from "@/assets/animations";
import Lottie from "lottie-react";

const FetchTripsLoader = () => {
  return (
    <div className="lg:w-[800px]">
      <Lottie
        animationData={loading}
        // speed={2}
      />
    </div>
  );
};

export default FetchTripsLoader;
