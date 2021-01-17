import { PassportStatic } from "passport";
import { Request, Response } from "express";
import passport from "passport";

const fail = { failureRedirect: "/login" }

module.exports = (server: any, p: PassportStatic) => {
    const pauth = passport.authenticate.bind(p);
    server.get("/auth/google", pauth("google", { failureRedirect: "/login", scope: [ "profile", "email" ]} ));
    server.get("/auth/google/redirect", pauth("google", fail), (req: Request, res: Response) => { res.redirect("/admin") });
}