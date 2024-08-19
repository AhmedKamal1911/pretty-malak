import { dotsLoader } from "@/assets/animations";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dotsLoader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const FetchTripsTypesLoader = () => {
  return (
    <div className="w-[100px] pointer-events-none">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        speed={2}
      />
    </div>
  );
};

export default FetchTripsTypesLoader;
