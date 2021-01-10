import express, { Request, Response } from "express";
import { requireAdmin, requireAuth } from "../controllers/auth.controller";

export const router = express.Router({
    strict: true
});

router.get("/", requireAuth, async (req: Request, res: Response) => {
    res.send(`
        <div style="display: flex; flex-direction: column;">
            <p>This is a protected route</p>
            <a href="/protected/admin">To Admin Route</a>
            <a href="/">Back To Home</a>
        </div>
    `);
});

router.get("/admin", requireAdmin, async (req: Request, res: Response) => {
    res.send(`
        <div style="display: flex; flex-direction: column;">
            <p>This is an admin route</p>
            <a href="/protected">To Protected Route</a>
            <a href="/">Back To Home</a>
        </div>
    `);
})