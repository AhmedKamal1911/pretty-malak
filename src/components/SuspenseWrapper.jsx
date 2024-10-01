import { Suspense } from "react";
import { PageLoader } from "./feedback";

const SuspenseWrapper = ({ children }) => {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

export default SuspenseWrapper;
