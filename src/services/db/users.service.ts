import passport from "passport";
import { usersRef } from "./collections.service";
export const exists = async (profile: passport.Profile) => {
    const { provider, id } = profile;
    try {
        const res = usersRef.where(provider, "==", id);
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
};