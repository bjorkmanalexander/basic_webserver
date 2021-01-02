import { FieldValue } from "@google-cloud/firestore";
import express, { Request, Response } from "express";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { create as CreateUser, update as UpdateUser, exists as UserExists } from "../db/users.service";

const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL
} = process.env;

export const router = express.Router({
    strict: true
});

passport.use(new Strategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL
},
async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await UserExists(profile);
        if (!user) {
            const create = await CreateUser(profile);
        } else {
            const update = await UpdateUser(user.id, { lastSeen: FieldValue.serverTimestamp() });
        }
        return done(undefined, profile);
    }
    catch (error) {
        return done(error, profile);
    }
}));

router.get("/google", passport.authenticate('google', { scope: [ 'profile', 'email' ] } ));
router.get("/google/redirect", passport.authenticate('google', { failureRedirect: "/"} ), async (req: Request, res: Response) => {
    res.redirect("/success");
});
