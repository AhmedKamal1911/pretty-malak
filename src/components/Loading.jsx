import { cn } from "@/utils/cn";
import { ErrorElement, FetchTripsLoader } from ".";

const Loading = ({
  children,
  isFetching,
  error,
  errorElement = <ErrorElement error={error?.message} />,
  loadingElement = <FetchTripsLoader />,
  loadingElementClassName,
}) => {
  // REQUIRED FALLBACK ELEMENT
  if (isFetching) {
    return (
      <div
        className={cn(
          "h-[60vh] flex justify-center items-center",
          loadingElementClassName
        )}
      >
        {loadingElement}
      </div>
    );
  }
  if (error) {
    return errorElement;
  }
  return children;
};

export default Loading;
