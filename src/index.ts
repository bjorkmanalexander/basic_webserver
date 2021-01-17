import express from "express";
import expressSession from "express-session";
import passport from "passport";
import { router } from "./routes/index.routes";
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
    require("./services/auth/passport.service")(passport);
    require("./routes/auth/passport.routes")(server, passport);
    server.use(router);
    server.listen(SERVER_PORT, () => {
        return
    });
})();