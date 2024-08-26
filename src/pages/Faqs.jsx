import { FaqForm, QuestionsAccordion, SectionHeader } from "@/components";
import useQueryWithLocale from "@/hooks/useQueryWithLocale";
import useScrollToTop from "@/hooks/useScrollToTop";
import { fetchFaqInfo } from "@/services/trips/queries";

const Faqs = () => {
  useScrollToTop();

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
          subTitle="Faqs"
          introText="Have A Question ?"
          desc="Welcome to our FAQ page! Here, you'll find answers to the most common questions about our services, products, and policies. Whether you're seeking information about our offerings, troubleshooting an issue, or just curious about how things work, we've got you covered."
        />
        <div className="flex flex-col gap-20">
          <QuestionsAccordion questionsList={faqsList} />
          <div>
            <SectionHeader
              className="text-center mb-10"
              introText="Still Have a Question ?"
            />
            <FaqForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
