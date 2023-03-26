import { User } from './users.types';

export function isUser(obj: User | null) {
  if (obj === null || typeof obj !== 'object') return false;

  return 'name' in obj && 'email' in obj && 'active' in obj && 'role' in obj;
}
