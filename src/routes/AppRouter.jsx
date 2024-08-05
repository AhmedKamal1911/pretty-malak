import RootLayout from "@/layout/RootLayout";
import AboutUs from "@/pages/AboutUs";
import Faqs from "@/pages/Faqs";
import Home from "@/pages/Home";
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
      <Route path="/about" element={<AboutUs />} />
    </Route>
  )
);
const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
