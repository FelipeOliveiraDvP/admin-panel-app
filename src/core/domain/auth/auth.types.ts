import { User } from '../users/users.types';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface ForgotRequest {
  email: string;
}

export interface RecoveryRequest {
  token: string;
  password: string;
  password_confirmation: string;
}
