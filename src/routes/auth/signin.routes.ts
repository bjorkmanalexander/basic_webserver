import { Request, Response, Router } from "express";

export const router = Router({
    strict: true
});

router.get("/", async (req: Request, res: Response) => {
    res.send(`
        <div style="display: flex; flex-direction: column">
            <h3>Sign In</h3>
            <a href="/auth/google">Sign in with Google</a>
        </div>
    `)
})