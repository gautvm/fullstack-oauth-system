import { AuthProvider } from "@prisma/client";

export interface User {
  provider: AuthProvider;
  username: string;
  displayName: string;
  profilePicture: string;
}
