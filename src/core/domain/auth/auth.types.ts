import { User } from '../users/users.types';

export interface AuthResponse {
  user: User;
  token: string;
}
