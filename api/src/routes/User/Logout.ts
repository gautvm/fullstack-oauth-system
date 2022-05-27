import { Router } from "express";

//Destroys the current session and logs out the user
export const Logout = () => {
  const router = Router();

  router.get("/", async (req, res) => {
    if (req.user) {
      req.session.destroy(() => {
        req.logout();
      });

      res.redirect(process.env.CLIENT_URL!);
    } else {
      res.redirect(process.env.CLIENT_URL!);
    }
  });

  return router;
};