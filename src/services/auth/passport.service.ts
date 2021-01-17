import { PassportStatic } from "passport";
import { Profile } from "../../typings/user";
import { oauth as GoogleOauth } from "./services/oauth.google.service";


module.exports = (passport: PassportStatic) => {

    passport.serializeUser((user, cb) => { cb(undefined, user) });
    passport.deserializeUser((user: Profile, cb) => { cb(undefined, user) });
    passport.use(GoogleOauth);

}