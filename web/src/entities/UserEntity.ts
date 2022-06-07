export interface UserEntity {
  id: string;
  provider: string;
  email: string;

  username: string;
  profilePicture: string;
  displayName: string;

  createdAt: Date;
  updatedAt: Date;
}