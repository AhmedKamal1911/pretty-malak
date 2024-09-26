import { loginBackground } from "@/assets/index";
import { LoginForm } from "@/components/index";
import { useTranslation } from "react-i18next";
const Login = ({ onSubmit }) => {
  const { t } = useTranslation("global");
  return (
    <div className="flex w-full max-w-[450px] border-[1px] border-main shadow-md md:max-w-[800px] md:min-h-[700px] bg-white rounded-lg overflow-hidden">
      <div className="flex-1 md:block hidden">
        <img
          src={loginBackground}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 md:p-5 flex gap-10 md:gap-36 flex-col justify-center py-5 md:py-10">
        <h3 className="text-center text-4xl md:text-5xl">
          {t("global.loginForm.loginText")}
        </h3>
        <div className="flex-1 px-5 md:p-0">
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;
