import { ERROR_ANIMATIONS } from "@/assets/animations";
import Lottie from "lottie-react";

const ErrorAnimation = ({ type = "global" }) => {
  return (
    <div>
      <Lottie
        className="w-full max-w-[500px]"
        animationData={
          Object.keys(ERROR_ANIMATIONS).includes(type)
            ? ERROR_ANIMATIONS[type]
            : ERROR_ANIMATIONS["global"]
        }
      />
    </div>
  );
};

export default ErrorAnimation;
