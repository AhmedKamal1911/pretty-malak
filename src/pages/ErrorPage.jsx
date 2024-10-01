import { ErrorAnimation } from "@/components/animations";

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <ErrorAnimation type={error.data} />
      <h3 className="font-bold text-4xl sm:text-6xl text-center font-mainFont error-stroke text-red-600">
        {error.statusText ?? "Oops! Something went wrong"}
      </h3>
    </div>
  );
};

export default ErrorPage;
