import express, { Request, Response } from "express";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";

const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL
} = process.env;

export const router = express.Router({
    strict: true
});

passport.use(new Strategy({
    clientID: `${GOOGLE_CLIENT_ID}`,
    clientSecret: `${GOOGLE_CLIENT_SECRET}`,
    callbackURL: GOOGLE_CALLBACK_URL
},
(accessToken, refreshToken, profile, done) => {
    // lookup if user exists in db
    return done(undefined, profile);
}));

router.get("/google", passport.authenticate('google', { scope: [ 'profile', 'email' ] } ));
router.get("/google/redirect", passport.authenticate('google', { failureRedirect: "/"} ), async (req: Request, res: Response) => {
    res.redirect("/success");
});
