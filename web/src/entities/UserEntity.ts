import { ProviderEntity } from "./ProviderEntity"

export interface UserEntity {
  id: string;
  provider: ProviderEntity;
  email: string;

  username: string;
  avatarUrl: string;
  displayName: string;

  createdAt: Date;
  updatedAt: Date;
}
