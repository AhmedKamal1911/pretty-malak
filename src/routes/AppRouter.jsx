import { SuspenseWrapper } from "@/components";
import { lazy } from "react";
import RootLayout from "@/layout/RootLayout";

// Lazy load the pages

const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Admin = lazy(() => import("@/pages/Admin"));
const ContactUs = lazy(() => import("@/pages/ContactUs"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
const Faqs = lazy(() => import("@/pages/Faqs"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const Trip = lazy(() => import("@/pages/Trip"));
const Trips = lazy(() => import("@/pages/Trips"));

import { fetchTripData } from "@/services/trips/queries";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "@/pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/trips"
        element={
          <SuspenseWrapper>
            <Trips />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/faqs"
        element={
          <SuspenseWrapper>
            <Faqs />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/about-us"
        element={
          <SuspenseWrapper>
            <AboutUs />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/contact-us"
        element={
          <SuspenseWrapper>
            <ContactUs />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/trips/:slug"
        element={
          <SuspenseWrapper>
            <Trip />
          </SuspenseWrapper>
        }
        loader={async (params) => {
          const handleNotFoundTrip = () => {
            throw new Response("trip", {
              status: 404,
              statusText: "Trip is not found",
            });
          };
          if (!isNaN(+params.params.slug)) {
            handleNotFoundTrip();
          }

          try {
            const tripData = await fetchTripData(params.params.slug, false);

            if (!tripData) handleNotFoundTrip();
            return null;
          } catch (e) {
            handleNotFoundTrip();
          }
        }}
      />
      <Route
        path="/admin"
        element={
          <SuspenseWrapper>
            <Admin />
          </SuspenseWrapper>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
