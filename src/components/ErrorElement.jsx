import { cn } from "@/utils/cn";

const ErrorElement = ({ error, errorElementClassName }) => {
  return (
    <div
      className={cn(
        "h-[40vh] flex flex-col justify-center items-center",
        errorElementClassName
      )}
    >
      <h3 className="font-bold text-4xl sm:text-6xl text-center error-stroke text-red-600">
        Failed to fetch due to {error}
      </h3>
    </div>
  );
};

export default ErrorElement;
