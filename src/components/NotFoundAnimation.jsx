import { notFound } from "@/assets/animations";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: notFound,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const NotFoundAnimation = () => {
  return (
    <div className="mx-auto lg:w-[900px] max-sm:h-[280px] pointer-events-none">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        speed={0.5}
      />
    </div>
  );
};

export default NotFoundAnimation;
