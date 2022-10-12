import { Router } from "express";

export const Test = () => {
  const router = Router();

  router.get("/test", async (req, res) => {
    res.send("successful");
  });

  return router;
};
