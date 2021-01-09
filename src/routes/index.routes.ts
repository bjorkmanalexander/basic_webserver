import express, { Request, Response } from "express";
export const router = express.Router({
    strict: true
});

router.get("/", async (req: Request, res: Response) => {
    if(req.user) {
        const { user }: any = req;
        res.send(`
            <div style="display: flex; flex-direction: column;">
                <p>Hello ${user.displayName}</p>
                <a href="/protected">Protected Route</a>
            </div>
        `);
    } else {
        res.send(`
            <div style="display: flex; flex-direction: column;">
                <a href="/auth/google">Auth with Google</a>
                <a href="/protected">Protected Route</a>
            </div>
        `);
    }
});

router.get("/success", async(req: Request, res: Response) => {
    // const { user } = req;
    // res.json(user);
    res.redirect("/");
});