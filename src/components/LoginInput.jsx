import { LoginInputFeild } from "./index";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/Form";

const LoginInput = ({ control, name, placeholder, type }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="w-full">
            <FormControl>
              <LoginInputFeild
                type={type}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-600 text-[16px]" />
          </FormItem>
        );
      }}
    />
  );
};

export default LoginInput;
