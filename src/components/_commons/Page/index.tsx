import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Breadcrumbs, Stack, Text, Title } from '@mantine/core';
import { IconHome } from '@tabler/icons';

interface Props {
  title: string;
  children: ReactNode;
}

export function Page({ title, children }: Props) {
  return (
    <Stack spacing="md" h="100%">
      <Breadcrumbs>
        <Anchor component={Link} to="/app/dashboard">
          <IconHome size={16} /> Ínicio
        </Anchor>
        <Text color="dimmed">{title}</Text>
      </Breadcrumbs>

      <Title order={2}>{title}</Title>

      {children}
    </Stack>
  );
}
