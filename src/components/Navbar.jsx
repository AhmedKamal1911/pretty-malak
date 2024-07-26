import { logo } from "@/assets";
import React from "react";

import useMediaQuery from "@/hooks/useMediaQuery";
import AsideDrawer from "./AsideDrawer";
import { LanguageSelectMenu, NavLinks } from ".";

const Navbar = () => {
  const isLargeScreen = useMediaQuery("(max-width: 991px)");
  console.log(isLargeScreen);
  const isMatched = useMediaQuery("(max-width: 767px)");
  return (
    <header className="shadow-sm  shadow-[#848485] py-4 h-[75.97px] flex items-center">
      <div className="container">
        <div className="flex justify-between items-center ">
          <div>
            <img src={logo} alt="logo" className="w-[200px] md:w-[250px]" />
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
  );
};

export default Navbar;
