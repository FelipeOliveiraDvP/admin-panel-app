import React from 'react';
import { IconDashboard, IconUsers } from '@tabler/icons';
import { MenuItem } from './Item';
import { Navbar, Stack } from '@mantine/core';
import { UserBio } from './UserBio';

interface Props {
  opened: boolean;
}

const data = [
  { icon: <IconDashboard size={16} />, color: 'violet', label: 'Dashboard', path: '/app/dashboard' },
  { icon: <IconUsers size={16} />, color: 'teal', label: 'Usuários', path: '/app/users' },
];

export function PrivateMenu({ opened }: Props) {
  const links = data.map((link) => <MenuItem {...link} key={link.label} />);

  return (
    <Navbar p="xs" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Stack align="stretch" justify="space-between" h="100%">
        <Navbar.Section>{links}</Navbar.Section>
        <Navbar.Section>
          <UserBio />
        </Navbar.Section>
      </Stack>
    </Navbar>
  );
}
