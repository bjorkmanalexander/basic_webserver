import { Request, Response, NextFunction } from "express";
import { getUser } from "../services/db/users.service";
import { Profile } from "../typings/user";


export const requiresAdmin = async (req: Request, res: Response, next: NextFunction) => {
    if(req.user !== undefined) {
        const user = req.user as Profile;
        const userProfile = await (await getUser(user)).data();
        if (userProfile!.roles.includes("admin")) {
            next();
        } else {
            res.redirect("/");
        }
    }
    else {
        res.redirect("/");
    }
}