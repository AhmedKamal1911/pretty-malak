import useMediaQuery from "@/hooks/useMediaQuery";
import AsideDrawer from "./AsideDrawer";
import { LanguageSelectMenu, NavLinks } from ".";
import { useEffect, useRef, useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { cn } from "@/utils/cn";

const Navbar = () => {
  const isMatched = useMediaQuery("(max-width: 767px)");
  const homepageMatch = useMatch("/");
  const isHomepage = Boolean(homepageMatch);
  const ref = useRef(null);
  const [isAnimateHeader, setIsAnimateHeader] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimateHeader(false);
        } else {
          setIsAnimateHeader(true);
        }
      }, // Adjust threshold as needed
      { rootMargin: "80px 0px" }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div ref={ref} />
      <header
        className={cn(
          isAnimateHeader && "animate-fadeDown bg-black",
          !isHomepage && "bg-black",
          "fixed transition-all top-0 left-0 right-0 z-[999] py-4 flex items-center"
        )}
      >
        <div className="container">
          <div className="flex justify-between items-center ">
            <div>
              <NavLink to="/">
                <h2 className="text-3xl text-white font-logoFont uppercase">
                  SeaCrew
                </h2>
              </NavLink>
            </div>
            <div className="flex gap-16 items-center">
              {isMatched ? (
                <AsideDrawer />
              ) : (
                <>
                  <NavLinks />
                  <LanguageSelectMenu />
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
