"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/Form";

import { signIn } from "@/services/trips/queries";
import { FormSubmitButton, LoginInput } from "../index";

import { useTranslation } from "react-i18next";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "password must be at least 2 characters.",
  }),
});

export function LoginForm({ onSubmit }) {
  const { t } = useTranslation("global");

  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    control,
    setError,
    formState: { isSubmitting },
  } = methods;
  // ...
  const handleLogin = async (loginCredentials) => {
    try {
      const user = await signIn({
        identifier: loginCredentials.username,
        password: loginCredentials.password,
      });
      onSubmit(user);
      console.log(user);
    } catch (error) {
      const errorMessage = error.response.data.error.message;
      setError("username", {
        type: "manual",
        message: errorMessage, // Assign the error message to the username field
      });
      console.log(errorMessage);
    }
  };
  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-8 h-full">
        <LoginInput
          control={control}
          name={"username"}
          placeholder={"Enter Username :"}
        />
        <LoginInput
          control={control}
          name={"password"}
          placeholder={"Enter Password :"}
          type="password"
        />

        <FormSubmitButton
          isSubmitting={isSubmitting}
          loadingTextTranslation={t("global.loadingText")}
          submitTextTranslation={t(
            "global.bookTripForm.bookTripFormButtonLabel"
          )}
        />
      </form>
    </Form>
  );
}

export default LoginForm;
