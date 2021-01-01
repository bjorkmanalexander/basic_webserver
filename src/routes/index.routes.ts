import express, { Request, Response } from "express";
export const router = express.Router({
    strict: true
});

router.get("/", async (req: Request, res: Response) => {
    res.send(`
        <a href="/auth/google">Auth with Google</a>
    `);
});

router.get("/success", async(req: Request, res: Response) => {
    const { user } = req;
    res.json(user);
});