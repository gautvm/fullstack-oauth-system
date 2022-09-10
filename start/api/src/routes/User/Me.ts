import { Router } from "express";

//Fetch user data route
export const Me = () => {
  const router = Router();

  router.get("/user/me", (req, res) => {
    res.send(req.user);
  });

  return router;
};
