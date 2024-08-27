import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const QuestionsAccordion = ({ questionsList }) => {
  return (
    <Accordion type="single" collapsible>
      {questionsList?.map(({ question, answer, id }) => (
        <AccordionItem
          value={`item-${id}`}
          key={id}
          className="mb-1 border-none shadow"
        >
          <AccordionTrigger className="border-0 p-5 bg-white transition-all data-[state=open]:bg-main data-[state=open]:text-white text-[19px]">
            {question}
          </AccordionTrigger>
          <AccordionContent className="p-5 bg-white text-[19px] leading-7 text-grayDesc">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default QuestionsAccordion;
