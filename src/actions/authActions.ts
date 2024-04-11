import { User } from "../models/UserModel";

export const login = (user: User) => ({
    type: "LOGIN" as const,
    payload: user
});

export const logout = () =>({
    type: "LOGOUT" as const
});