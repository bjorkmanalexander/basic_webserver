import express, { Request, Response } from "express";
export const router = express.Router({
    strict: true
});

router.get("/", async (req: Request, res: Response) => {
    res.send(`
        <div style="display: flex; flex-direction: column;">
            <a href="/auth/google">Auth with Google</a>
            <a href="/protected">Protected Route</a>
        </div>
    `);
});

router.get("/success", async(req: Request, res: Response) => {
    const { user } = req;
    res.json(user);
});