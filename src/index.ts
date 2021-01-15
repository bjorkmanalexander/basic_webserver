import express from "express";
import expressSession from "express-session";
import passport from "passport";
import { router as IndexRouter } from "./routes/index.routes";
import { router as ProtectedRouter } from "./routes/protected.routes";
import { router as GoogleAuth } from "./services/auth/auth.google.service";
import { Profile } from "./typings/user";
(async () => {
    const {
        SERVER_PORT,
        SERVER_SECRET
    } = process.env;

    const server = express();
    const session = {
        secret: SERVER_SECRET,
        cookie: {
            httpOnly: true,
            maxAge: 360 * 10000
        },
        resave: false,
        saveUninitialized: false
    };

    server.disable("x-powered-by");
    server.use(express.urlencoded({
        extended: true
    }));

    server.use(express.json());
    server.use(expressSession(session));

    server.use(passport.initialize());
    server.use(passport.session());

    passport.serializeUser((user, cb) => {
        cb(null, user);
    });

    passport.deserializeUser((user: Profile, cb) => {
        cb(null, user);
    });

    server.use("/auth", GoogleAuth);
    server.use("/protected", ProtectedRouter);
    server.use("/", IndexRouter);
    server.listen(SERVER_PORT, () => {
        return
    });
})();