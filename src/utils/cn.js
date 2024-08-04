import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// Define the cn function to combine and merge class names
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
