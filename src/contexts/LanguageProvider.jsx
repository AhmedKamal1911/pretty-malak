import i18n from "@/i18n";
import { createContext, useContext, useEffect, useState } from "react";

// Creating the context with a default value
const LanguageContext = createContext(null);
export const DEFAULT_LANG = {
  countryName: "US",
  languageName: "en",
};
const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => JSON.parse(localStorage.getItem("lang")) ?? DEFAULT_LANG
  );
  const [isRTL, setIsRTL] = useState(selectedLanguage.languageName === "ar");
  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute(
      "lang",
      selectedLanguage.languageName
    );
    // Set the font family based on the selected language
    const fontFamily =
      selectedLanguage.languageName === "ar"
        ? "'Cairo', sans-serif"
        : "'Bebas Neue', sans-serif";
    document.body.style.fontFamily = fontFamily;
  }, [isRTL, selectedLanguage]);
  const onLanguageChange = (value) => {
    setSelectedLanguage(value);
    localStorage.setItem("lang", JSON.stringify(value));
    const lang = value.languageName;
    const isRTLNewValue = lang === "ar";
    setIsRTL(isRTLNewValue);
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, setSelectedLanguage, isRTL, onLanguageChange }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const contextValue = useContext(LanguageContext);
  if (!contextValue)
    throw new Error("use language must be use inside language provider");
  return contextValue;
};

export { useLanguage, LanguageProvider };
