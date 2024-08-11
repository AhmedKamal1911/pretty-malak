import { cn } from "@/utils/cn";
import * as React from "react";

export const Textarea = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props;

  return (
    <div className="relative">
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...otherProps}
      />
      {props.icon && (
        <span className="absolute left-[3px] top-1 group-focus:!text-main">
          {props.icon}
        </span>
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";
