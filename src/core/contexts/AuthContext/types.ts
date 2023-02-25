import { LoginResponse } from '@/core/domain/auth/auth.types';
import { User } from '@/core/domain/users/users.types';

export interface AuthContextType {
  user: User | null;
  login: (data: LoginResponse, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
  isUserCorrupted: () => boolean;
}
