import { error } from "@/assets/animations";
import Lottie from "lottie-react";

const ErrorAnimation = () => {
  return (
    <div>
      <Lottie animationData={error} />
    </div>
  );
};

export default ErrorAnimation;
