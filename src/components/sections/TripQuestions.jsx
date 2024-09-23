import { QuestionsList, TripOverview } from "..";
import useQueryWithLocale from "@/hooks/useQueryWithLocale";
import { fetchClientQuestions } from "@/services/trips/queries";
import { useTranslation } from "react-i18next";

const TripQuestions = () => {
  const { data: tripQuestionsResponse } = useQueryWithLocale({
    queryKey: ["clientQuestions"],
    queryFn: fetchClientQuestions,
  });
  const { t } = useTranslation("global");
  return (
    <>
      <TripOverview title={t("tripInfo.questionsIntroText")} />
      <QuestionsList list={tripQuestionsResponse?.clientQuestionsList} />
    </>
  );
};

export default TripQuestions;
