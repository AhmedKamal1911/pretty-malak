import { FaqForm, SectionHeader } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

import { clientQuestions } from "@/data";

const Faqs = () => {
  return (
    <div className="min-h-screen py-36">
      <div className="container">
        <SectionHeader
          className="xl:w-[900px] mb-10"
          subTitle="Faqs"
          introText="Have A Question ?"
          desc="Welcome to our FAQ page! Here, you'll find answers to the most common questions about our services, products, and policies. Whether you're seeking information about our offerings, troubleshooting an issue, or just curious about how things work, we've got you covered."
        />
        <div className="flex flex-col gap-20">
          <Accordion type="single" collapsible>
            {clientQuestions.map(({ question, answer, id }) => (
              <AccordionItem
                value={`item-${id}`}
                key={id}
                className="mb-1 border-none shadow"
              >
                <AccordionTrigger className="border-0 p-5  data-[state=open]:bg-main data-[state=open]:text-white text-[17px]">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="p-5 bg-white text-[17px]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
