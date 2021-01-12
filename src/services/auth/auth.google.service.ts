import { FieldValue } from "@google-cloud/firestore";
import express, { Request, Response } from "express";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { create as CreateUser, update as UpdateUser } from "../db/users.service";
import { User as UserData } from "../../middleware/user.middleware";
import { createToken } from "../../middleware/jwt.middleware";

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
        const user = await UserData(profile);
        if (!user) {
            const create = await CreateUser(profile);
        } else {
            const update = await UpdateUser(user.id, { lastSeen: FieldValue.serverTimestamp() });
        }
        return done(undefined, user);
    }
    catch (error) {
        return done(error, profile);
    }
}));

router.get("/google", passport.authenticate('google', { scope: [ 'profile', 'email' ] } ));
router.get("/google/redirect", passport.authenticate('google', { failureRedirect: "/" } ), async (req: Request, res: Response) => {
    const token = await createToken(req.user);
    // res.redirect("/success");
    res.cookie("jwt", token, { httpOnly: true }).redirect("/success");
});
