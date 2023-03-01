import { Router } from "express";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import passport from "passport";
import { PassportGoogleUserEntity } from "../../entities/PassportGoogleUserEntity";
import db from "../../db/Database";

//Google Authentication Strategy
export const GoogleOAuthStrategy = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: process.env.GOOGLE_CALLBACK_URL!,
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: PassportGoogleUserEntity,
        cb: any
      ) => {
        //Query to check if a user already exists
        const existingUser = await db.user.findUnique({
          where: {
            email: profile._json.email,
          },
        });

        if (existingUser) {
          //If a user does exist, return a callback of the existing user object
          cb(null, existingUser);
        } else {
          //If there is no user, create a new one with the authentication data
          const newUser = await db.user.create({
            data: {
              provider: "google",
              email: profile._json.email,
              displayName: profile.displayName,
              avatarUrl: profile.photos[0].value,
            },
          });

          //return the newUser object in a callback function
          cb(null, newUser);
        }
      }
    )
  );

  const router = Router();

  router.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })
  );

  router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      res.redirect(process.env.CLIENT_URL!);
    }
  );

  return router;
};
