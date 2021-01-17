import { Request, Response, Router } from "express";
import { router as admin } from "./admin/admin.routes";
export const router = Router({
    strict: true
});

router.use("/admin", admin);
router.get("/", async (req: Request, res: Response) => {
    if(!req.user) {
        res.send(`
            <div>
                <a href="/auth/google">Auth with Google</a>
            </div>
        `)
    }
    else {
        const { user }: any = req;
        res.send(`
            <div>
                <p>Hello ${user.displayName}</p>
                <a href="/admin">To admin-route</a>
            </div>
        `)
    }
});