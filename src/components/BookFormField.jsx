import { forwardRef } from "react";
import { Input } from "./ui/Input";

const BookFormField = forwardRef(function BookFormField(props, ref) {
  return (
    <div className="relative">
      <Input
        {...props}
        ref={ref}
        className="text-[16px] focus-visible:ring-transparent pl-7 focus:placeholder:text-main border-t-0 border-l-0 border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border,placeholder] duration-500"
      />
      {props.icon && (
        <span className="absolute left-[3px] bottom-3 group-focus:!text-main">
          {props.icon}
        </span>
      )}
    </div>
  );
});

export default BookFormField;
