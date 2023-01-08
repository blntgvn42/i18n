import {z} from "zod";
import {faker} from "@faker-js/faker";

export const UserLogin = z.object({
    username: z
        .string(),
    password: z
        .string()
})

export const UserRegister = z.object({
    userId: z
        .string()
        .default(faker.datatype.uuid),
    username: z
        .string(),
    email: z
        .string()
        .email(),
    password: z
        .string(),
    passwordConfirmation: z
        .string(),
    avatar: z
        .string()
        .default(faker.image.avatar)
}).superRefine(({password, passwordConfirmation}, ctx) => {
    if (password !== passwordConfirmation) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
        });
    }
});

export type UserLoginType = z.infer<typeof UserLogin>
export type UserRegisterType = z.infer<typeof UserRegister>