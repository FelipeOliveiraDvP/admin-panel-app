import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/core/contexts/AuthContext';
import { User } from '@/core/domain/users/users.types';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;

    const user: User = {
      id: 1,
      name: username,
      email: 'user@email.com',
      active: true,
      role: {
        name: 'Administrador',
        identifier: 'ADMIN',
      },
    };

    login({ user, token: 'abc123' }, () => navigate('/app/dashboard'));
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Seu nome: <input name="username" type="text" required />
        </label>{' '}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
