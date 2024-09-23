// Function to format time and return only the timing system (AM/PM)
import { format, isValid, parse } from "date-fns";
export const getTimingSystem = (time) => {
  if (!time) return "N/A"; // Handle undefined or null time values

  const parsedTime = parse(time, "HH:mm:ss.SSS", new Date());
  if (isValid(parsedTime)) {
    return format(parsedTime, "a"); // 'a' returns AM or PM
  } else {
    console.error("Invalid time format:", time);
    return "Invalid Time";
  }
};
