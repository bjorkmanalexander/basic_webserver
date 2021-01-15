import { NextFunction, Request, Response } from "express";
import { Profile } from "../typings/user";
import { getUser } from "../services/db/users.service";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/");
    }
}

export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
    if (req.user !== undefined) {
        const user = req.user as Profile;
        const userData = await (await getUser(user)).data();
        if (userData!.roles.includes('admin')) {
            next()
        } else {
            res.redirect("/");
        }
    } else {
        res.redirect("/");
    }
}