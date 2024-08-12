import { useState } from "react";

const TripNavigation = () => {
  const [activeSection, setActiveSection] = useState();
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
    <div className="bg-white rounded-md sticky left-0 right-0 top-[76px] w-full p-3 shadow-lg z-[800]">
      <ul className="flex justify-center max-[378px]:flex-col items-center gap-2 md:gap-16 min-[376px]:flex-row">
        <li>
          <button
            onClick={() => scrollToSection("info")}
            className={`p-2 min-[367px]:p-3 lg:px-7 lg:py-5 text-[17px] sm:text-xl ${
              activeSection === "info" && "text-orange-500"
            }`}
          >
            information
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("tour-plan")}
            className={`p-2  min-[367px]:p-3 lg:px-7 lg:py-5 text-[17px] sm:text-xl ${
              activeSection === "tour-plan" && "text-orange-500"
            }`}
          >
            tour plan
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("faq")}
            className={`p-2  min-[367px]:p-3 lg:px-7 lg:py-5 text-[17px] sm:text-xl ${
              activeSection === "faq" && "text-orange-500"
            }`}
          >
            faq
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("reviews")}
            className={`p-2  min-[367px]:p-3 lg:px-7 lg:py-5 text-[17px] sm:text-xl ${
              activeSection === "reviews" && "text-orange-500"
            }`}
          >
            reviews
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TripNavigation;
