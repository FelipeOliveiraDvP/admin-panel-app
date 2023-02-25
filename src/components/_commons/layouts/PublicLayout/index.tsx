import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Center } from '@mantine/core';
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
    <Center style={{ height: '100%' }}>
      <Outlet />
    </Center>
  );
}
