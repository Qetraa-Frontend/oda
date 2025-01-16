import { z } from "zod";

export const odaAmbassadorFormSchema = z.object({
    budget: z.string().min(
        1,
        "Budget is required",
    ),
    clientStatus: z.string().min(
        1,
        "Client status is required",
    ),
    developer: z.string().min(
        1,
        "Developer is required",
    ),
    email: z.
        string().
        email("Enter a valid email address").
        min(
            1,
            "Email is required",
        ),
    name: z.string().min(
        1,
        "Name is required",
    ),
    phoneNumber: z.string().min(
        1,
        "Phone number is required",
    ),
    unitArea: z.string().min(
        1,
        "Unit area is required",
    ),
    unitLocation: z.string().min(
        1,
        "Unit location is required",
    ),
});
