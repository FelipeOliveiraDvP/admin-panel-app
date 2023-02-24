import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/core/contexts/AuthContext';

export function PrivateLayout() {
  const navigate = useNavigate();
  const { user, logout, isUserCorrupted } = useAuth();

  function handleLogout() {
    logout(() => navigate('/'));
  }

  useEffect(() => {
    if (isUserCorrupted()) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Bem vindo {user && user.name}!</h2>
        <nav>
          <Link to="/app/dashboard">Dashboard</Link>
          <Link to="/app/users">Usuários</Link>
          <Link to="/">Acessar o login</Link>
        </nav>
        <button onClick={() => handleLogout()}>Sair</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
