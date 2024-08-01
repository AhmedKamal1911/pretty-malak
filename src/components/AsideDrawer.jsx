import { createPortal } from "react-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import LanguageSelectMenu from "./LanguageSelectMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const rootElement = document.getElementById("root");
const AsideDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isAnimateDrawerLinks, setIsAnimateDrawerLinks] = useState(false);

  const toggleShowAside = () => {
    setShowDrawer((prev) => !prev);
  };

  useEffect(() => {
    if (!showDrawer) {
      setIsAnimateDrawerLinks(false);
      return;
    }
    const startDrawerLinksAnimation = () => {
      setIsAnimateDrawerLinks(true);
    };
    const timeoutId = setTimeout(startDrawerLinksAnimation, 600);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showDrawer]);
  return (
    <>
      <button onClick={toggleShowAside}>
        <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
      </button>
      {createPortal(
        <aside
          className={`${
            showDrawer ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 fixed inset-0 z-[2000]  bg-[rgba(27,27,27,0.25)] backdrop-blur-[10px] flex justify-center items-center`}
        >
          <button
            onClick={toggleShowAside}
            className="absolute right-2 top-2 rounded-full w-[40px] h-[40px] z-[999]"
          >
            <FontAwesomeIcon icon={faXmark} className="text-white text-3xl" />
          </button>
          <div>
            <div className="overflow-hidden">
              <NavLinks
                disableInitialAnimation
                className={`flex-col transition-transform duration-1000 items-center -translate-y-full ${
                  isAnimateDrawerLinks ? "translate-y-0" : "-translate-y-full"
                } mb-5`}
              />
            </div>
            <LanguageSelectMenu />
          </div>
        </aside>,
        rootElement
      )}
    </>
  );
};

export default AsideDrawer;
