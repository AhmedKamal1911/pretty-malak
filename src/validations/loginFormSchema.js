import { z } from "zod";

const loginFormSchema = (t) => {
  return z.object({
    username: z.string().min(2, {
      message: t("global.loginForm.validation.userName"),
    }),
    password: z.string().min(8, {
      message: t("global.loginForm.validation.password"),
    }),
  });
};

export default loginFormSchema;
