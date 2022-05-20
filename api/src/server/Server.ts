import express, { Application } from "express";
import dotenv from "dotenv";

//Import routes
import { GitHubOAuthStrategy } from "../routes/Auth/strategies/GitHubOAuthStrategy"

export class Server {
  public app: Application;

  public constructor() {
    this.app = express();

    //register server middlewares
    this.registerMiddlewares();

    //register server base routes
    this.registerRoutes();

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

      next();
    });
  }

  private registerRoutes() {
    this.app.get("/", (req, res) => {
      res.json({
        success: true,
        message: "Fullstack OAuth System API",
      });
    });

    this.app.use("/api", GitHubOAuthStrategy());
  }
}