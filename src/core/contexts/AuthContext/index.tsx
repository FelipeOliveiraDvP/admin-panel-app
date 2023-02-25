import React, { useEffect } from 'react';
import { AuthContextType } from './types';
import { fakeAuthProvider } from '@/core/helpers/fakeAuthProvider';
import { isUser } from '@/core/domain/users/users.helpers';
import { User } from '@/core/domain/users/users.types';
import { LoginResponse } from '@/core/domain/auth/auth.types';

const { VITE_USER_KEY, VITE_TOKEN_KEY } = import.meta.env;

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  login: (data, cb) => {
    cb();
    return data;
  },
  logout: (cb) => {
    cb();
  },
  isUserCorrupted: () => false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem(VITE_USER_KEY);

    if (localUser !== null) {
      setUser(JSON.parse(localUser) as User);
    }
  }, []);

  function login(data: LoginResponse, callback: VoidFunction) {
    return fakeAuthProvider.signin(() => {
      localStorage.setItem(VITE_USER_KEY, JSON.stringify(data.user));
      localStorage.setItem(VITE_TOKEN_KEY, JSON.stringify(data.token));

      setUser(data.user);
      callback();
    });
  }

  function logout(callback: VoidFunction) {
    return fakeAuthProvider.signout(() => {
      localStorage.removeItem(VITE_USER_KEY);
      localStorage.removeItem(VITE_TOKEN_KEY);

      setUser(null);
      callback();
    });
  }

  function isUserCorrupted() {
    const localUser = localStorage.getItem(VITE_USER_KEY);

    if (localUser === null) return true;

    return !isUser(JSON.parse(localUser) as User);
  }

  const value: AuthContextType = { user, login, logout, isUserCorrupted };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
