// DatePickerWithPresets.jsx
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./Button";
import { cn } from "@/utils/cn";
import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./SelectMenu";
import { Calendar } from "./calendar";

export function DatePickerWithPresets({ selectedDate, onDateChange }) {
  const [date, setDate] = useState(selectedDate);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full text-[16px] ps-0  border-t-0 border-l-0 group border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border] duration-500 justify-start",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="me-2 h-4 w-4 text-main" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="group-focus:text-main text-gray-400">
              Pick a date
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2 bg-white">
        <Select
          onValueChange={(value) =>
            handleDateChange(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent
            ref={(ref) => {
              if (!ref) return;
              ref.ontouchstart = (e) => e.preventDefault();
            }}
            position="popper"
            className="bg-white"
          >
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
            <SelectItem value="15">In 15 days</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={handleDateChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
