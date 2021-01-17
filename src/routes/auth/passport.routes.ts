import { PassportStatic } from "passport";
import { Request, Response } from "express";
import passport from "passport";

const fail = { failureRedirect: "/sign-in" }

module.exports = (server: any, p: PassportStatic) => {
    const pauth = passport.authenticate.bind(p);
    server.get("/auth/google", pauth("google", { ...fail, scope: [ "profile", "email" ] } ));
    server.get("/auth/google/redirect", pauth("google", fail), (req: Request, res: Response) => { res.redirect("/user") });

    server.get("/sign-out", (req: Request, res: Response) => { req.logout(); res.redirect("/") });
}