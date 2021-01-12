import passport from "passport";
import { exists as UserExists } from "../services/db/users.service";
import { UpdatedProfile } from "../typings/user";

export const User = async (profile: passport.Profile) => {
    const userData = await UserExists(profile);
    if(userData) {
        const updatedProfile: UpdatedProfile = {
            uid: userData.id,
            roles: userData.data.roles,
            ...profile
        }
        return updatedProfile
    }
}