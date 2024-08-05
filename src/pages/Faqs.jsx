import { FaqFormField, SectionHeader } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { clientQuestions } from "@/data";
import { useForm } from "react-hook-form";

const Faqs = () => {
  const methods = useForm();
  const { handleSubmit, control } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen py-36">
      <div className="container">
        <SectionHeader
          className="xl:w-[900px] mb-10"
          subTitle="Faqs"
          introText="Have A Question ?"
          desc="Welcome to our FAQ page! Here, you'll find answers to the most common questions about our services, products, and policies. Whether you're seeking information about our offerings, troubleshooting an issue, or just curious about how things work, we've got you covered."
        />
        <div className="flex flex-col gap-4">
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

          <Form {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 p-4 border "
            >
              <div className="flex flex-col gap-5">
                <div className="flex justify-between gap-5">
                  <FormField
                    control={control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <FaqFormField placeholder="Your Name:" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <FaqFormField placeholder="Email:" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <FaqFormField
                          placeholder="Type your subject:"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <Textarea
                  className="text-[16px] focus-visible:ring-transparent  focus:placeholder:text-main border-t-0 border-l-0 border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border,placeholder] duration-500"
                  placeholder="Type your message here."
                  id="message-2"
                />
              </div>

              <button
                type="submit"
                className="border py-2 px-10 bg-main text-white"
              >
                Submit
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
