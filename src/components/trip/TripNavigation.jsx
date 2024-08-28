import { useState } from "react";
import { useTranslation } from "react-i18next";

const TripNavigation = () => {
  const [activeSection, setActiveSection] = useState();
  const { t } = useTranslation("global");
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      setActiveSection(sectionId);
      const yOffset = -175;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="bg-white rounded-md sticky start-0 end-0 top-[76px] w-full p-3 shadow-lg z-[800]">
      <ul className="flex justify-center  items-center gap-2 md:gap-16 min-[376px]:flex-row">
        <li>
          <button
            onClick={() => scrollToSection("info")}
            className={`min-[367px]:p-3 lg:px-7 lg:py-5 text-[16px] sm:text-xl ${
              activeSection === "info" && "text-orange-500"
            }`}
          >
            {t("tripInfo.navbarInfo.information")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("tour-plan")}
            className={` min-[367px]:p-3 lg:px-7 lg:py-5 text-[16px] sm:text-xl ${
              activeSection === "tour-plan" && "text-orange-500"
            }`}
          >
            {t("tripInfo.navbarInfo.tourPlan")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("faq")}
            className={` min-[367px]:p-3 lg:px-7 lg:py-5 text-[16px] sm:text-xl ${
              activeSection === "faq" && "text-orange-500"
            }`}
          >
            {t("tripInfo.navbarInfo.faq")}
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("reviews")}
            className={` min-[367px]:p-3 lg:px-7 lg:py-5 text-[17px] sm:text-xl ${
              activeSection === "reviews" && "text-orange-500"
            }`}
          >
            {t("tripInfo.navbarInfo.reviews")}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TripNavigation;
