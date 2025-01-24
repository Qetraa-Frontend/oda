import { z } from "zod";

export const contactUsFormSchema = z.object({
    comment: z.string().optional(),
    email: z.
        string().
        email("Enter a valid Email Address").
        min(
            1,
            "Email is required",
        ),
    name: z.string().min(
        1,
        "Name is required",
    ),
    phoneNumber: z.
        string().
        regex(
            /^\+?[0-9]{10,15}$/,
            "Enter a valid Phone Number",
        ),
});
