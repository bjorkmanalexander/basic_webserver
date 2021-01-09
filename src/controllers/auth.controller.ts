import express, { NextFunction, Request, Response } from "express";

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if(req.user) {
        next();
    } else {
        res.redirect("/");
    }
}