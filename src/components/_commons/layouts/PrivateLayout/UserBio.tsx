import React from 'react';
import { Avatar, Box, Group, Text, UnstyledButton, useMantineTheme } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';
import { useAuth } from '@/core/contexts/AuthContext';
import { Link } from 'react-router-dom';

export function UserBio() {
  const theme = useMantineTheme();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
      }}
    >
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        }}
        component={Link}
        to="/app/profile"
      >
        <Group>
          <Avatar radius="xl" color="violet">
            {user && user.name.charAt(0)}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {user && user.name}
            </Text>
            <Text color="dimmed" size="xs">
              {user && user.role.name}
            </Text>
          </Box>

          {theme.dir === 'ltr' ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
        </Group>
      </UnstyledButton>
    </Box>
  );
}
