import { useLanguage } from "@/contexts/LanguageProvider";
import { useQuery } from "@tanstack/react-query";

const useQueryWithLocale = (
  queryParams = {
    queryKey: [],
    queryFn: () => {},
  }
) => {
  const { selectedLanguage } = useLanguage();
  console.log({ selectedLanguage, queryParams });
  return useQuery({
    queryKey: [...queryParams.queryKey, selectedLanguage], // Object form for query key
    queryFn: queryParams.queryFn,
  });
};
export default useQueryWithLocale;
