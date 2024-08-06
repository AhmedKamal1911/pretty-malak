import { forwardRef } from "react";
import { Input } from "./ui/Input";

const FaqFormField = forwardRef(function FaqFormField(props, ref) {
  return (
    <Input
      {...props}
      ref={ref}
      className="text-[16px] focus-visible:ring-transparent px-0 pt-8 pb-7 focus:placeholder:text-main border-t-0 border-l-0 border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border,placeholder] duration-500"
    />
  );
});

export default FaqFormField;
