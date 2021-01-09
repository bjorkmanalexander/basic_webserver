import express, { Request, Response } from "express";
import { requireAuth } from "../controllers/auth.controller";

export const router = express.Router({
    strict: true
});

router.get("/", requireAuth, async (req: Request, res: Response) => {
    res.send(`This is a protected route`);
});