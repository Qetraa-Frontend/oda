import { z } from "zod";

export const checkoutFormSchema = z.object({
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
    paymentPlan: z.string().min(
        1,
        "Payment Method is required",
    ).or(z.number()),
    phoneNumber: z.
        string().
        regex(
            /^\+?[0-9]{10,15}$/,
            "Enter a valid Phone Number",
        ),
});
