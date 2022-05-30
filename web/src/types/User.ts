export interface User {
  id: ID;
}

export interface ID {
  id: string;
  email: string;
  username: string;
  profilePicture: string;
  displayName: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}
