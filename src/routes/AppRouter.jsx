import RootLayout from "@/layout/RootLayout";
import AboutUs from "@/pages/AboutUs";
import Admin from "@/pages/Admin";
import ContactUs from "@/pages/ContactUs";

import ErrorPage from "@/pages/ErrorPage";
import Faqs from "@/pages/Faqs";
import Home from "@/pages/Home";

import NotFoundPage from "@/pages/NotFoundPage";
import Trip from "@/pages/Trip";
import Trips from "@/pages/Trips";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/trip/:id" element={<Trip />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
