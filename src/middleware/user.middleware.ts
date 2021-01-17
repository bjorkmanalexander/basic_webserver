import { Profile } from "../typings/user";
import { createUser, exists, updateUser } from "../services/db/users.service";
import { FieldValue } from "@google-cloud/firestore";

let user;

export const UserProfile = async (profile: Profile) => {
    user = await exists(profile);
    if (!user) {
        user = await createUser(profile);
        const userProfile: Profile = { ...profile, id: user.id }
        return userProfile;
    } else {
        const userProfile: Profile = { ...profile, id: user.id }
        await updateUser(userProfile, { lastSeen: FieldValue.serverTimestamp() });
        return userProfile;
    }
}