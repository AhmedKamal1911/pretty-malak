import { format, isValid, parse } from "date-fns";
export const formatTime = (time) => {
  if (!time) return "N/A"; // Handle undefined or null time values

  const parsedTime = parse(time, "HH:mm:ss.SSS", new Date());
  if (isValid(parsedTime)) {
    return format(parsedTime, "hh:mm");
  } else {
    console.error("Invalid time format:", time);
    return "Invalid Time";
  }
};
