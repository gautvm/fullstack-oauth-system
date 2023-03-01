import { Router } from "express";

//Destroys the current session and logs out the user
export const Logout = () => {
  const router = Router();

  router.get("/user/logout", async (req, res) => {
    if (req.user) {
      req.session.destroy(() => {
        req.logout();
      });

      res.redirect(`${process.env.CLIENT_URL!}/login`);
    } else {
      res.redirect(`${process.env.CLIENT_URL!}/login`);
    }
  });

  return router;
};
