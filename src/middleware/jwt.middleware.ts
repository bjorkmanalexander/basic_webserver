import { sign } from "jsonwebtoken";
import passport from "passport";

const { JWT_SECRET } = process.env;

export const createToken = async (profile: any) => {
    const { id } = profile;
    return sign(id, JWT_SECRET);
}