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
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { FaqInput } from "..";
import { useRef } from "react";

import emailjs from "@emailjs/browser";

import { RxCrossCircled } from "react-icons/rx";

import { useToast } from "@/hooks/useToast";
import { useTranslation } from "react-i18next";
import useLangAwareForm from "@/hooks/useLangAwareForm";
import { FormSubmitButton } from "../index";

const serviceId = import.meta.env.VITE_EMAILJS_FAQ_FORM_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_FAQ_FORM_TEMPLATE_ID;
const ContactForm = () => {
  const { t } = useTranslation("global");
  const formRef = useRef(null);
  const { toast } = useToast();

  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(questionFormSchema(t)),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      subject: "",
    },
  });
  const {
    reset,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  useLangAwareForm(t, reset, questionFormSchema);

  const sendEmail = () => {
    return emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: import.meta.env.VITE_EMAILJS_FORM_PUBLIC_KEY,
      })
      .then(
        () => {
          toast({
            description: t("global.toasts.messageToast.successMessage"),
            variant: "success",
            icon: <IoMdCheckmarkCircleOutline className="w-7 h-7" />,
          });
          setTimeout(() => {
            reset();
          }, 1000);
        },
        () => {
          toast({
            description: t("global.toasts.messageToast.failedMessage"),
            variant: "destructive",
            icon: <RxCrossCircled className="w-6 h-6" />,
          });
        }
      );
  };
  const onSubmit = async () => {
    await sendEmail();
  };

  return (
    <Form {...methods}>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="border-[#cac8c85d] border rounded-md shadow-md flex-1"
      >
        <div className="flex flex-col gap-8  p-3 md:p-8 h-full">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <FaqInput
              control={control}
              name="name"
              type="text"
              placeholder={t("global.contactForm.name")}
            />

            <FaqInput
              control={control}
              name="email"
              type="email"
              placeholder={t("global.contactForm.email")}
            />
          </div>
          <FaqInput
            control={control}
            name="subject"
            type="text"
            placeholder={t("global.contactForm.subject")}
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
                    className="text-[16px] p-0 focus-visible:ring-transparent h-[180px] resize-none focus:placeholder:text-main border-t-0 border-l-0 border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border,placeholder] duration-500"
                    placeholder={t("global.contactForm.message")}
                    id="message-2"
                  />
                </FormControl>
                <FormMessage className="text-red-600 text-[16px]" />
              </FormItem>
            )}
          />

          <FormSubmitButton
            isSubmitting={isSubmitting}
            loadingTextTranslation={t("global.loadingText")}
            submitTextTranslation={t(
              "global.contactForm.contactFormButtonLabel"
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
