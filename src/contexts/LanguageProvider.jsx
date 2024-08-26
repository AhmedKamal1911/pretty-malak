import { createContext, useContext, useState } from "react";

// Creating the context with a default value
const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [isRTL, setIsRTL] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    () =>
      JSON.parse(localStorage.getItem("lang")) ?? {
        countryName: "US",
        languageName: "en",
      }
  );

  const onLanguageChange = (value) => {
    setSelectedLanguage(value);
    localStorage.setItem("lang", JSON.stringify(value));
    const isRTLNewValue = value.languageName === "ar";
    setIsRTL(isRTLNewValue);
    document.documentElement.setAttribute("dir", isRTLNewValue ? "rtl" : "ltr");
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
