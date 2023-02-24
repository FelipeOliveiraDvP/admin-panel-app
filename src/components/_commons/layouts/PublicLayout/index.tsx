import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/core/contexts/AuthContext';

export function PublicLayout() {
  const navigate = useNavigate();
  const { isUserCorrupted } = useAuth();

  useEffect(() => {
    if (!isUserCorrupted()) {
      navigate('/app/dashboard');
    }
  }, []);

  return (
    <div>
      <header>
        <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
