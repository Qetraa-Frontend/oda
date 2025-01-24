import { z } from "zod";

export const odaAmbassadorFormSchema = z.object({
    budget: z.string().min(
        1,
        "Budget is required",
    ),
    clientStatus: z.string().min(
        1,
        "Client Status is required",
    ),
    developer: z.string().min(
        1,
        "Developer is required",
    ),
    ownerName: z.string().min(
        1,
        "Name is required",
    ),
    ownerPhoneNumber: z.
        string().
        regex(
            /^\+?[0-9]{10,15}$/,
            "Enter a valid Phone Number (10-15 digits, optional + prefix)",
        ),
    referralEmail: z.
        string().
        email("Enter a valid Email Address").
        min(
            1,
            "Email is required",
        ),
    referralName: z.string().min(
        1,
        "Name is required",
    ),
    referralPhoneNumber: z.
        string().
        regex(
            /^\+?[0-9]{10,15}$/,
            "Enter a valid Phone Number",
        ),
    unitArea: z.string().min(
        1,
        "Unit Area is required",
    ),
    unitLocation: z.string().min(
        1,
        "Unit Location is required",
    ),
});
