import { NextFunction, Request, Response } from "express";
import { exists as UserExists } from "../services/db/users.service";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/");
    }
}

export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
    // const roles = await getUser(uid);
    next();
}