import { useLanguage } from "@/contexts/LanguageProvider";

import { Children, cloneElement } from "react";

const InfiniteSlider = ({ children }) => {
  // Clone children to ensure aria-hidden is applied
  const childrenClone = Children.map(children, (child) =>
    cloneElement(child, {
      "aria-hidden": true,
    })
  );
  const { isRTL } = useLanguage();

  return (
    <div className="overflow-hidden">
      <div
        className={`w-[max-content] ${
          isRTL ? "animate-infiniteSlideRTL" : "animate-infiniteSlideLTR"
        } py-10 bg-white flex gap-[50px]`}
      >
        {children}
        {childrenClone}
      </div>
    </div>
  );
};

export default InfiniteSlider;
