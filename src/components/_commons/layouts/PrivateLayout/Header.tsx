import React from 'react';
import { ActionIcon, Burger, Flex, Header, MediaQuery, Text } from '@mantine/core';
import { IconLogout } from '@tabler/icons';

interface Props {
  opened: boolean;
  toggle: () => void;
  onLogout: () => void;
}

export function PrivateHeader({ opened, toggle, onLogout }: Props) {
  return (
    <Header height={{ base: 70 }} p="md">
      <Flex justify="space-between" align="center" h="100%">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={() => toggle()} size="sm" mr="xl" />
        </MediaQuery>

        <Text weight={900} variant="gradient" color="lime" size={24}>
          Admin Panel
        </Text>

        <ActionIcon variant="outline" size={30} color="red" onClick={() => onLogout()}>
          <IconLogout size={16} />
        </ActionIcon>
      </Flex>
    </Header>
  );
}
