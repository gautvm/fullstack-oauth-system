import { Router } from "express";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import db from "../../db/Database";
import { PassportGitHubUserEntity } from "../../entities/PassportGitHubUserEntity";

//GitHub Authentication Strategy
export const GitHubOAuthStrategy = () => {
  dotenv.config();

  //Link passport credentials and data
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        callbackURL: process.env.GITHUB_CALLBACK_URL!,
        scope: ["user:email"],
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: PassportGitHubUserEntity,
        cb: any
      ) => {
        //Query to check if a user already exists
        const existingUser = await db.user.findUnique({
          where: {
            username: profile.username 
          },
        });

        if (existingUser) {
          //If a user does exist, return a callback of the existing user object
          cb(null, existingUser);
        } else {
          //If there is no user, create a new one with the authentication data
          const newUser = await db.user.create({
            data: {
              provider: "github",
              username: profile.username,
              email: profile.emails[0].value,
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
    "/auth/github",
    passport.authenticate("github", { scope: ["user:email"] })
  );

  router.get(
    "/auth/github/callback",
    passport.authenticate("github", {
      scope: ["user:email"],
      failureRedirect: "/",
    }),
    (req, res) => {
      res.redirect(process.env.CLIENT_URL!);
    }
  );

  return router;
};
