import { ErrorAnimation } from "@/components";
import { Button } from "react-day-picker";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <ErrorAnimation />
      <h3 className="font-bold text-4xl sm:text-6xl text-center error-stroke text-red-600">
        Error Something happend
      </h3>
      <Button asChild variant="primary" className="py-6 px-7">
        <NavLink to="/">Go Back</NavLink>
      </Button>
    </div>
  );
};

export default ErrorPage;
