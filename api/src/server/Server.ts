import express, { Application } from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import { User } from "@prisma/client";
import { isAuthenticated } from "../middlewares/isAuthenticated";

//Import routes
import { GitHubOAuthStrategy } from "../routes/Auth/GitHubOAuthStrategy";
import { Me } from "../routes/User/Me";
import { Logout } from "..//routes/User/Logout";

export class Server {
  public app: Application;

  public constructor() {
    this.app = express();

    //register server middlewares
    this.registerMiddlewares();

    //register server base routes
    this.registerRoutes();

    //initializing passport.js
    this.registerPassport();

    dotenv.config();
  }

  public start() {
    //Listen the server on a local port
    this.app.listen(process.env.API_PORT, () => {
      console.log(`Server started on http://localhost:${process.env.API_PORT}`);
    });
  }

  private registerMiddlewares() {
    //Use express json
    this.app.use(express.json());

    //Log server requests & request method
    this.app.use(async (req, res, next) => {
      console.log(`[${req.method} - ${req.path}]`);
      res.header("Access-Control-Allow-Origin", "*");

      next();
    });

    //cors
    this.app.use(cors({ origin: true, credentials: true }));

    //Setting up express session
    this.app.use(
      session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: false,
          maxAge: 24 * 60 * 60 * 1000,
        },
      })
    );

    //init passport middlewares
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  private registerRoutes() {
    this.app.get("/", (req, res) => {
      res.json({
        success: true,
        isAuthenticated: req.isAuthenticated(),
        message: "Fullstack OAuth System API",
      });
    });

    //Regular routes
    this.app.use("/api", GitHubOAuthStrategy());
    //Protected routes
    this.app.use("/api", isAuthenticated, Me(), Logout());
  }

  private registerPassport() {
    //Serialize user data
    passport.serializeUser(async (user: any, cb: any) => {
      const userData: User = user as any;

      cb(null, userData);
    });

    passport.deserializeUser<string>(async (id, done) => done(null, { id }));
  }
}
