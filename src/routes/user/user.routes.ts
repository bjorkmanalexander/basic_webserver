import { Request, Response, Router } from "express";
import { requiresLogin } from "../../middleware/auth.middleware";

export const router = Router({
    strict: true
});

router.get("/", requiresLogin, async (req: Request, res: Response) => {
    const { user }: any = req;
    const markup = `
        <div style="display: flex; flex-direction: column">
            <h3>This route requires you to be logged in</h3>
            ${user.roles.includes('admin') ? `<a href="/admin">To Admin</a>` : ``}
            <a href="/">To Home</a>
            <a href="/sign-out">Sign Out</a>
        </div>
    `;
    res.send(markup);
});