import { loading } from "@/assets/animations";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const FetchTripsLoader = () => {
  return (
    <div className="lg:w-[800px] pointer-events-none">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        speed={2}
      />
    </div>
  );
};

export default FetchTripsLoader;
