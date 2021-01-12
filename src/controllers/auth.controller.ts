import { NextFunction, Request, Response } from "express";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/");
    }
}

export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req;
    next();
}