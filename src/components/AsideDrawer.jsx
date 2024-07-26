import { createPortal } from "react-dom";
import NavLinks from "./NavLinks";
import { LuMenu } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";
import LanguageSelectMenu from "./LanguageSelectMenu";
const AsideDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleShowAside = () => {
    setShowDrawer((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleShowAside}>
        <LuMenu size="25px" />
      </button>
      {showDrawer &&
        createPortal(
          <aside
            className={`w-0 ${
              showDrawer && "animate-fill-to-right"
            } fixed inset-0 z-[999] h-screen bg-[rgba(130,150,158,0.36)] backdrop-blur-[5px] flex justify-center items-center`}
          >
            <button
              onClick={toggleShowAside}
              className="absolute right-2 top-2 rounded-full w-[40px] h-[40px] z-[999]"
            >
              <RxCrossCircled size="40px" className="text-[#ec3939]" />
            </button>
            <div>
              <NavLinks
                className={` ${showDrawer && "animate-smooth-show"} mb-5`}
              />
              <LanguageSelectMenu />
            </div>
          </aside>,
          document.getElementById("root")
        )}
    </>
  );
};

export default AsideDrawer;
