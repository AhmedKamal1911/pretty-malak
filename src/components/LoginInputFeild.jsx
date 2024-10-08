import { forwardRef } from "react";
import { Input } from "./ui/Input";

const LoginInputFeild = forwardRef(function LoginInputFeild(props, ref) {
  return (
    <Input
      {...props}
      ref={ref}
      className="text-[16px] font-mono focus-visible:ring-transparent px-1 pt-8 pb-5 focus:placeholder:text-main border-t-0 border-l-0 border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border,placeholder] duration-500"
    />
  );
});

export default LoginInputFeild;
