import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Breadcrumbs, Center, Image, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { IconHome } from '@tabler/icons';

import welcome from '@/assets/welcome.svg';

export function DashboardPage() {
  const theme = useMantineTheme();

  return (
    <Stack spacing="md" h="100%">
      <Breadcrumbs>
        <Anchor component={Link} to="/app/dashboard">
          <IconHome size={16} /> Ínicio
        </Anchor>
        <Text color="dimmed">Dashboard</Text>
      </Breadcrumbs>

      <Center
        h="100%"
        sx={{
          background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          borderRadius: theme.radius.sm,
        }}
      >
        <Stack align="center">
          <Image src={welcome} maw={350} />
          <Title order={2}>Bem vindo ao Admin Panel</Title>
          <Text>O Admin Panel é um tema leve, flexível que se adapta a qualquer projeto.</Text>
        </Stack>
      </Center>
    </Stack>
  );
}
