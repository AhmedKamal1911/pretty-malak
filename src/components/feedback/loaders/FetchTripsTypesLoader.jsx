import { dotsLoader } from "@/assets/animations";
import Lottie from "lottie-react";

const FetchTripsTypesLoader = () => {
  return (
    <div className="w-[100px]">
      <Lottie
        animationData={dotsLoader}
        // speed={2}
      />
    </div>
  );
};

export default FetchTripsTypesLoader;
