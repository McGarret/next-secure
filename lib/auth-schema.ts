import { z } from "zod";

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .max(50, { message: "Name must be less than 50 characters long" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" })
        .max(50, { message: "Password must be less than 50 characters long" }),
});


const signInSchema = formSchema.pick({
    email: true,
    password: true,
});

export { formSchema, signInSchema };

