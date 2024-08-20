import { ErrorAnimation } from "@/components/animations";

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <ErrorAnimation />
      <h3 className="font-bold text-4xl sm:text-6xl text-center error-stroke text-red-600">
        Oops! Something went wrong
      </h3>
    </div>
  );
};

export default ErrorPage;
