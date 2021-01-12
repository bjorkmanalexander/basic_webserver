import { sign } from "jsonwebtoken";
import { Profile } from "../typings/user";

const { JWT_SECRET } = process.env;

export const createToken = (profile: Profile) => {
    const { uid } = profile;
    return sign(uid, JWT_SECRET);
}