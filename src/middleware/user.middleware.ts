import { Profile } from "../typings/user";
import { exists as UserExists } from "../services/db/users.service";

export const User = async (profile: Profile) => {
    const userData = await UserExists(profile);
    if(userData) {
        const updatedProfile: Profile = {
            ...profile,
            id: userData.id
        }
        return updatedProfile
    }
}