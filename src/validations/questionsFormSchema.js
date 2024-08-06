import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email Address is Required" }).email(),
  message: z.string().min(1, { message: "message is required" }),
  name: z
    .string()
    .min(2, { message: "Your Name Must bigger thant 2 letters at least" })
    .max(50, { message: "Your Name Must Be equal or less than 50 letter" }),
  subject: z
    .string()
    .min(2, { message: "subject content is required" })
    .max(30, { message: "the subject length is to large!" }),
});

export default formSchema;
