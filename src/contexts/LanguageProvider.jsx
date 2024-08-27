import i18n from "@/i18n";
import { createContext, useContext, useState } from "react";

// Creating the context with a default value
const LanguageContext = createContext(null);
export const DEFAULT_LANG = {
  countryName: "US",
  languageName: "en",
};
const LanguageProvider = ({ children }) => {
  const [isRTL, setIsRTL] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => JSON.parse(localStorage.getItem("lang")) ?? DEFAULT_LANG
  );

  const onLanguageChange = (value) => {
    setSelectedLanguage(value);
    localStorage.setItem("lang", JSON.stringify(value));
    const lang = value.languageName;
    const isRTLNewValue = lang === "ar";
    setIsRTL(isRTLNewValue);
    document.documentElement.setAttribute("dir", isRTLNewValue ? "rtl" : "ltr");
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
