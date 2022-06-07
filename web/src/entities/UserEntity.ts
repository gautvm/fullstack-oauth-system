export interface UserEntity {
  id: string;
  provider: string;
  email: string;

  username: string;
  avatarUrl: string;
  displayName: string;

  createdAt: Date;
  updatedAt: Date;
}
