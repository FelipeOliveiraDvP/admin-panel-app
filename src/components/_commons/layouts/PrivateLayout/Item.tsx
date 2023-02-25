import React from 'react';
import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';

interface Props {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
}

export function MenuItem({ icon, color, label, path }: Props) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
      component={Link}
      to={path}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}
