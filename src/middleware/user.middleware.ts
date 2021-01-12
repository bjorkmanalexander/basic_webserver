import passport from "passport";
import { exists as UserExists } from "../services/db/users.service";

export const User = async (profile: passport.Profile) => {
    const userData = await UserExists(profile);
    if(userData) {
        const updatedProfile: passport.Profile = {
            ...profile,
            id: userData.id
        }
        return updatedProfile
    }
}