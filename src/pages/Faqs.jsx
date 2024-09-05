import { FaqForm, QuestionsAccordion, SectionHeader } from "@/components";

import useQueryWithLocale from "@/hooks/useQueryWithLocale";
import useScrollToTop from "@/hooks/useScrollToTop";
import { fetchFaqInfo } from "@/services/trips/queries";
import { useTranslation } from "react-i18next";

const Faqs = () => {
  useScrollToTop();
  const { t } = useTranslation("global");
  const { data } = useQueryWithLocale({
    queryKey: ["faqs"], // Object form for query key
    queryFn: fetchFaqInfo,
  });
  const faqsList = data?.faqsList ?? [];

  return (
    <div className="min-h-screen py-36 bg-light">
      <div className="container">
        <SectionHeader
          className="xl:w-[900px] mb-10"
          subTitle={t("faqsPage.subTitle")}
          introText={t("faqsPage.introText")}
          desc={t("faqsPage.desc")}
        />
        <div className="flex flex-col gap-20">
          <QuestionsAccordion questionsList={faqsList} />
          <div>
            <SectionHeader
              className="text-center mb-10"
              introText={t("faqsPage.formIntroText")}
              introTextRevealClassName="mx-auto"
            />
            <FaqForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
