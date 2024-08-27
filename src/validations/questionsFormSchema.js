import { z } from "zod";

const questionFormSchema = (t) => {
  return z.object({
    email: z
      .string()
      .min(1, {
        message: t("global.contactForm.validation.emailRequired"),
      })
      .email({
        message: t("global.contactForm.validation.emailInvalid"),
      }),
    message: z.string().min(1, {
      message: t("global.contactForm.validation.messageRequired"),
    }),
    name: z
      .string()
      .min(2, { message: t("global.contactForm.validation.nameMin") })
      .max(50, { message: t("global.contactForm.validation.nameMax") }),
    subject: z
      .string()
      .min(2, { message: t("global.contactForm.validation.subjectMin") })
      .max(30, {
        message: t("global.contactForm.validation.subjectMax"),
      }),
  });
};

export default questionFormSchema;
