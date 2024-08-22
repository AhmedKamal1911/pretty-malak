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
          <AccordionTrigger className="bg-white border-0 p-5  data-[state=open]:bg-main data-[state=open]:text-white text-[17px]">
            {question}
          </AccordionTrigger>
          <AccordionContent className="p-5 bg-white text-[17px]">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default QuestionsAccordion;
