import * as z from "zod";

const usernameMinLength = 5;
const passwordMinLength = 8;

export const mainFormSchema = z
  .object({
    username: z.string().min(usernameMinLength, { message: `Username must be at least ${usernameMinLength} characters long.` }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(passwordMinLength, { message: `Password must be at least ${passwordMinLength} characters long.` }),
    confirmPassword: z.string(),
    termsAndConditions: z.boolean(),
    signToNewsletter: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.termsAndConditions === true, {
    message: "This field is required.",
    path: ["termsAndConditions"],
  });
