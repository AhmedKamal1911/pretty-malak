import { cn } from "@/utils/cn";
import { NetworkErrorAnimation } from "./animations";

const ErrorElement = ({ error, errorElementClassName }) => {
  console.log(error);
  return (
    <div
      className={cn(
        "h-[40vh] flex flex-col justify-center items-center",
        errorElementClassName
      )}
    >
      <NetworkErrorAnimation />
      <h3 className="font-bold text-4xl sm:text-6xl text-center error-stroke text-red-600">
        {error}
      </h3>
    </div>
  );
};

export default ErrorElement;
