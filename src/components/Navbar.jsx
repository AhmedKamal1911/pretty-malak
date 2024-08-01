import useMediaQuery from "@/hooks/useMediaQuery";
import AsideDrawer from "./AsideDrawer";
import { LanguageSelectMenu, NavLinks } from ".";

const Navbar = () => {
  const isMatched = useMediaQuery("(max-width: 767px)");
  return (
    <header className="fixed top-0 left-0 right-0 z-[999] py-4 flex items-center">
      <div className="container">
        <div className="flex justify-between items-center ">
          <div>
            <h2 className="text-3xl text-white font-logoFont uppercase">
              SeaCrew
            </h2>
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
