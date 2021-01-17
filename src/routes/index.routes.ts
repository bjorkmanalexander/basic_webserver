import { Request, Response, Router } from "express";
import { router as adminRouter } from "./admin/admin.routes";
import { router as signInRouter } from "./auth/signin.routes";
import { router as userRouter } from "./user/user.routes";
export const router = Router({
    strict: true
});

router.use("/admin", adminRouter);
router.use("/sign-in", signInRouter);
router.use("/user", userRouter);
router.get("/", async (req: Request, res: Response) => {
        const { user }: any = req;
        const markup = `
            <div style="display: flex; flex-direction: column">
            ${user ? `
                <h3>Hello ${user.displayName}</h3>
                ${user.roles.includes('admin') ? `<a href="/admin">To Admin-route</a>` : ``}
                <a href="/user">To User-route</a>
                <a href="/sign-out">Sign Out</a>
            ` :
            `
                <h3>Homepage</h3>
                <a href="/sign-in">To Sign In</a>
            `
            }
            </div>
        `;
    res.send(markup);
});