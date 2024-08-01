import { Footer, HeroSection, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
