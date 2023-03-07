import { Router } from "express";

//Destroys the current session and logs out the user
export const Logout = () => {
  const router = Router();

  router.get("/user/logout", async (req, res, next) => {
    if (req.user) {
      req.logout((err) => {
        if (err) { return next(err); }
      });

      res.redirect(`${process.env.CLIENT_URL!}/login`);
    } else {
      res.redirect(`${process.env.CLIENT_URL!}/login`);
    }
  });

  return router;
};
