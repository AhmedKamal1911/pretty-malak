import { z } from "zod";
const phoneNumberRegex =
  /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?[\d\s.-]{7,}$/;
const numberRegex = /^[0-9]+$/; //
const bookTripFormSchema = z.object({
  email: z.string().min(1, { message: "Email Address is Required" }).email(),
  message: z.string().min(1, { message: "message is required" }),
  firstName: z
    .string()
    .min(2, { message: "Your first name Must more than 2 letters at least" })
    .max(30, { message: "Your Name Must Be equal or less than 50 letter" }),
  lastName: z
    .string()
    .min(2, { message: "Your first name Must more than 2 letters at least" })
    .max(30, { message: "Your Name Must Be equal or less than 50 letter" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(phoneNumberRegex, { message: "Invalid phone number" }),
  hotelName: z.string().min(1, { message: "Hotel Name Is Requierd" }),
  roomNumber: z.string().min(1, { message: "Required" }),
  adultNumber: z
    .string()
    .min(1, { message: "At least one adult is required" })
    .regex(numberRegex, { message: "Adult number must be a valid number" }),
  childNumber: z
    .string()
    .regex(numberRegex, { message: "Child number must be a valid number" }),
  checkInDate: z
    .date()
    .refine((date) => date !== null && !isNaN(date.getTime()), {
      message: "Check-in date is required",
    }),
});

export default bookTripFormSchema;
