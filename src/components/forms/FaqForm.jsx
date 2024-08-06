import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
import questionFormSchema from "@/validations/questionsFormSchema";
import { Textarea } from "@/components/ui/Textarea";

import { FaqInput } from "..";
import { useRef } from "react";
import sendEmail from "@/utils/sendEmail";

const FaqForm = () => {
  const formRef = useRef();
  const publicKey = import.meta.env.VITE_EMAILJS_FAQ_FORM_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_FAQ_FORM_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_FAQ_FORM_TEMPLATE_ID;

  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      subject: "",
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  console.log("errors", errors);

  const onSubmit = (data) => {
    sendEmail(formRef, serviceId, templateId, publicKey);
    console.log(data);
  };
  return (
    <Form {...methods}>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-10 p-8 border-[#cac8c85d] border rounded-md shadow-md"
      >
        <div className="flex flex-col gap-8">
          <div className="flex justify-between gap-6">
            <FaqInput
              control={control}
              name="name"
              type="text"
              placeholder="Your Name:"
            />

            <FaqInput
              control={control}
              name="email"
              type="email"
              placeholder="Email:"
            />
          </div>
          <FaqInput
            control={control}
            name="subject"
            type="text"
            placeholder="Type your subject:"
          />

          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Textarea
                    control={control}
                    {...field}
                    type="text"
                    className="text-[16px] p-0 focus-visible:ring-transparent min-h-[100px] max-h-[180px] focus:placeholder:text-main border-t-0 border-l-0 border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border,placeholder] duration-500"
                    placeholder="Type your message here."
                    id="message-2"
                  />
                </FormControl>
                <FormMessage className="text-red-600 text-[16px]" />
              </FormItem>
            )}
          />
        </div>
        <button className="border py-2 px-10 bg-main text-white">Submit</button>
      </form>
    </Form>
  );
};

export default FaqForm;
