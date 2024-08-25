import { createContext, useEffect, useState } from "react";

// Creating the context with a default value
export const PageDirectionContext = createContext({
  isRTL: false,
  toggleDirection: () => {},
});

export const PageDirectionProvider = ({ children }) => {
  const [isRTL, setIsRTL] = useState(false);

  const toggleDirection = (boolean) => {
    setIsRTL(boolean);
  };

  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem("lang"))?.languageName || "en";
    const isCurrentRTL = lang === "ar";
    setIsRTL(isCurrentRTL);
    const htmlElement = document.documentElement;

    if (htmlElement) {
      htmlElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    }
  }, [isRTL]);

  return (
    <PageDirectionContext.Provider value={{ isRTL, toggleDirection }}>
      {children}
    </PageDirectionContext.Provider>
  );
};
