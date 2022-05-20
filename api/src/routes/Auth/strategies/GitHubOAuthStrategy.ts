import { Router } from "express";

//GitHub Authentication Strategy
export const GitHubOAuthStrategy = () => {

  const router = Router();

  router.get("/auth/github", (req, res) => {
      res.send("works")
  });

  return router;
};