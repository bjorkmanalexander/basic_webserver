import { NextFunction, Request, Response } from "express";

export const requiresLogin = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/sign-in");
    }

}