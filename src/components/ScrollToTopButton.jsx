import { useLanguage } from "@/contexts/LanguageProvider";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const { t } = useTranslation("global");
  const { isRTL } = useLanguage();
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Subscribing to the scrollYProgress value and updating local state
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest * 100); // Convert to percentage
    setIsVisible(latest > 0.1); // Show button after scrolling 10% of the page
  });
  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      onClick={scrollToTop}
      style={{
        background: `conic-gradient(#bfa888 ${progress}%, #dfdfdf ${progress}%)`,
      }}
      className={`fixed cursor-pointer transition-transform transform ${
        isVisible
          ? "end-2 translate-y-0 opacity-100"
          : "translate-y-24 opacity-0 z-[-999]"
      }  select-none overflow-hidden p-1 bottom-2 h-[160px] w-[50px] rounded-t-3xl rounded-b-3xl z-[999]`}
    >
      <div className="flex flex-col justify-center items-center gap-8 h-full bg-white rounded-t-3xl rounded-b-3xl">
        <FaLongArrowAltUp className="h-6" />
        <span
          className={`${
            isRTL ? "rotate-90" : "-rotate-90"
          } text-xl text-nowrap`}
        >
          {t("global.toTopButtonLabel")}
        </span>
      </div>
    </motion.div>
  );
};

export default ScrollToTopButton;
``;
