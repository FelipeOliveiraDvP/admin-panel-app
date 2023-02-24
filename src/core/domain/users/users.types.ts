import { Timestamps } from '../_commons/types';

export interface User extends Timestamps {
  id: number;
  name: string;
  email: string;
  active: boolean;
  role: {
    name: string;
    identifier: UserRoles;
  };
}

export type UserRoles = 'ADMIN' | 'MANAGER' | 'USER';
