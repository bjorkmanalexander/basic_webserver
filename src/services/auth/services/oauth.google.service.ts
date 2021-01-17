import { Strategy } from "passport-google-oauth20";
import { UserProfile } from "../../../middleware/user.middleware";
import { Profile } from "../../../typings/user";

const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL
} = process.env;

export const oauth = new Strategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL
},
async(_, __, profile: Profile, done) => {
    try {
        const user = await UserProfile(profile);
        return done(undefined, user);
    }
    catch (error) {
        return done(error, profile);
    }
});