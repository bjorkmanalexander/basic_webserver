import express, { Request, Response } from "express";
import { requiresAdmin } from "../../middleware/admin.middleware";

export const router = express.Router({
    strict: true
});

router.get("/", requiresAdmin, (req: Request, res: Response) => {
    res.send(`
        <div style="display: flex; flex-direction: column">
            <h3>This is an admin-route</h3>
            <a href="/user">To User</a>
            <a href="/">To Home</a>
            <a href="/sign-out">Sign Out</a>
        </div>
    `)
});