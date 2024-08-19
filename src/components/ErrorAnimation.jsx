import { error } from "@/assets/animations";
import React from "react";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: error,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const ErrorAnimation = () => {
  return (
    <div>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        speed={0.5}
      />
    </div>
  );
};

export default ErrorAnimation;
