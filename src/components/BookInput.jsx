import { FormControl, FormField, FormItem, FormMessage } from "./ui/Form";

import BookFormField from "./BookFormField";

const BookInput = ({ control, name, placeholder, type, icon, min }) => {
  const IconComponent = icon;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="w-full relative">
            <FormControl>
              <BookFormField
                type={type}
                placeholder={placeholder}
                {...field}
                icon={<IconComponent className="w-4 h-4 text-main" />}
                {...(min !== undefined && { min: min })}
              />
            </FormControl>
            <FormMessage className="text-red-600 text-[16px]" />
          </FormItem>
        );
      }}
    />
  );
};

export default BookInput;
