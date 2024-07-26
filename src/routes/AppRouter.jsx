import RootLayout from "@/layout/RootLayout";
import AboutUs from "@/pages/AboutUs";
import Home from "@/pages/Home";
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
    </Route>
  )
);
const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
