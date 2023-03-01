# Fullstack OAuth System

This is an open-source full-stack OAuth authentication system that's perfect for your next web application. Whether you're building a small project or a large-scale system, this repository provides a solid foundation to build upon.

The system is highly customizable and easy to use. Simply fork the repository and adjust the code to meet your specific requirements.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the `api` folder and run `npm install` to install the necessary dependencies.
3. Create a local PostgreSQL database and copy its database URL.
4. Go to the [GitHub Developer Settings](https://github.com/settings/developers) or the [Google Cloud Console](https://console.cloud.google.com/) (depending on what OAuth systems you want to include) and create the necessary OAuth application. Then, copy the `Client ID` and `Client Secret`.
5. Create an `.env` file in the `api` folder (copying the existing template in `.env.example`) with the following environment variables:
    - `API_PORT`: the port number for the API server (prefilled)
    - `CLIENT_URL`: the URL for the client-side of the application (prefilled)
    - `DATABASE_URL`: the URL to your PostgreSQL database
    - `SESSION_SECRET`: a secret key for Express session handling
    - `GITHUB_CLIENT_ID`: the client ID for GitHub OAuth authentication
    - `GITHUB_CLIENT_SECRET`: the secret key for GitHub OAuth authentication
    - `GITHUB_CALLBACK_URL`: the callback URL for GitHub OAuth authentication (prefilled)
    - `GOOGLE_CLIENT_ID`: the client ID for Google OAuth authentication
    - `GOOGLE_CLIENT_SECRET`: the secret key for Google OAuth authentication
    - `GOOGLE_CALLBACK_URL`: the callback URL for Google OAuth authentication (prefilled)
6. Run `npm run dev` to start the Node.js API.
7. Navigate to the `web` folder and run `npm install` to install the necessary dependencies.
8. Create a `.env` file with the contents of `.env.example`. If you have the API running on the same port, it should work; otherwise, update it.
9. Run `npm run dev` to start the Next.js application.
10. Visit `http://localhost:3000` in your web browser to see the running application.

### Project Components

The "start" folder contains the user interface, while the "finished" folder includes all components of the project. The system is built using the following technologies:

| Codebase | Description | Technologies |
| --- | --- | --- |
| api | Node.js REST API | Node.js, Express, TypeScript, PostgreSQL, Prisma, Passport.js |
| web | Next.js Frontend | Node.js, TypeScript, Next.js, Axios |