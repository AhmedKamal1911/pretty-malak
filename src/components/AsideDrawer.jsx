import { createPortal } from "react-dom";
import NavLinks from "./NavLinks";
import { LuMenu } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";
import LanguageSelectMenu from "./LanguageSelectMenu";
const AsideDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const toggleShowAside = () => {
    setShowDrawer((prev) => !prev);
    setIsMounted(false);
  };
  const activeMenuClass =
    !isMounted && showDrawer
      ? "animate-fill-to-right"
      : "animate-fillOut-to-left";

  return (
    <>
      <button onClick={toggleShowAside}>
        <LuMenu size="25px" className="text-white" />
      </button>
      <aside
        className={`${
          isMounted ? "-left-full" : ""
        } ${activeMenuClass} fixed inset-0 z-[999] h-screen bg-[rgba(27,27,27,0.25)] backdrop-blur-[10px] flex justify-center items-center`}
      >
        <button
          onClick={toggleShowAside}
          className="absolute right-2 top-2 rounded-full w-[40px] h-[40px] z-[999]"
        >
          <RxCrossCircled size="40px" className="text-[#ec3939]" />
        </button>
        <div>
          <NavLinks
            className={`flex-col items-center ${
              showDrawer && "animate-smooth-show"
            } mb-5`}
          />
          <LanguageSelectMenu />
        </div>
      </aside>
    </>
  );
};

export default AsideDrawer;
