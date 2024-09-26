import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "../ui/Form";

import { signIn } from "@/services/trips/queries";
import { FormSubmitButton, LoginInput } from "../index";

import { useTranslation } from "react-i18next";
import loginFormSchema from "@/validations/loginFormSchema";
import useLangAwareForm from "@/hooks/useLangAwareForm";

export function LoginForm({ onSubmit }) {
  const { t } = useTranslation("global");

  const methods = useForm({
    mode: "onBlur",
    resolver: zodResolver(loginFormSchema(t)),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { isSubmitting },
  } = methods;
  // ...

  useLangAwareForm(t, reset, loginFormSchema);

  const handleLogin = async (loginCredentials) => {
    try {
      const user = await signIn({
        identifier: loginCredentials.username,
        password: loginCredentials.password,
      });
      onSubmit(user);
    } catch (e) {
      setError("username", {
        type: "manual",
        message: t("global.loginForm.validation.invalidCredentials"), // Assign the error message to the username field
      });
    }
  };
  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-8 h-full">
        <LoginInput
          control={control}
          name={"username"}
          placeholder={t("global.loginForm.userName")}
        />
        <LoginInput
          control={control}
          name={"password"}
          placeholder={t("global.loginForm.password")}
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
