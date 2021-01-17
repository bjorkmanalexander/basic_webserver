import express, { Request, Response } from "express";

export const router = express.Router({
    strict: true
});

router.get("/", (req: Request, res: Response) => {
    res.send(`
        <div>
            <p>This is an admin-route</p>
            <a href="/">Back to home</a>
        </div>
    `)
})