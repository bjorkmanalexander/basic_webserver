import express, { Request, Response } from "express";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export const router = express.Router({
    strict: true
});

const {
    JWT_SECRET
} = process.env;

passport.use(new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}, async (payload, cb) => {
    try {
        console.log(payload);
        return cb(undefined, payload);
    }
    catch (error) {
        return cb(error, payload);
    }
}));
