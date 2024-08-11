import RootLayout from "@/layout/RootLayout";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Faqs from "@/pages/Faqs";
import Home from "@/pages/Home";
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
    <Route errorElement={<p>erorrrrrrrrr</p>} element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/trip/:id" element={<Trip />} />
    </Route>
  )
);
const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
