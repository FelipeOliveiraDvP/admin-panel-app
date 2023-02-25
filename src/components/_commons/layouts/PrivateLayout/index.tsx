import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppShell, useMantineTheme } from '@mantine/core';

import { PrivateHeader } from './Header';
import { PrivateMenu } from './Menu';
import { PrivateFooter } from './Footer';

import { useAuth } from '@/core/contexts/AuthContext';

export function PrivateLayout() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { logout, isUserCorrupted } = useAuth();

  function handleLogout() {
    logout(() => navigate('/'));
  }

  function toggle() {
    setOpened(!opened);
  }

  useEffect(() => {
    if (isUserCorrupted()) {
      navigate('/');
    }
  }, []);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<PrivateHeader opened={opened} toggle={toggle} onLogout={handleLogout} />}
      navbar={<PrivateMenu opened={opened} />}
      footer={<PrivateFooter />}
    >
      <Outlet />
    </AppShell>
  );
}
