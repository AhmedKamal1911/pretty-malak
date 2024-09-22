import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLanguage } from "@/contexts/LanguageProvider";

const useLangAwareForm = (t, reset, schema) => {
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    // Re-create the form schema and reset the form when the language changes
    reset(
      {},
      {
        keepValues: true, // Ensure form values are kept when resetting
        resolver: zodResolver(schema(t)),
      }
    );
  }, [t, selectedLanguage, reset, schema]);
};
export default useLangAwareForm;
