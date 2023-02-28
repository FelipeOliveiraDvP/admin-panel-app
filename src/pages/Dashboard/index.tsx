import React from 'react';
import { Center, Image, Stack, Text, Title } from '@mantine/core';
import { Page } from '@/components/_commons/Page';

import welcome from '@/assets/welcome.svg';

export function DashboardPage() {
  return (
    <Page title="Dashboard">
      <Center h="100%">
        <Stack align="center">
          <Image src={welcome} maw={350} />
          <Title order={2}>Bem vindo ao Admin Panel</Title>
          <Text>O Admin Panel é um tema leve, flexível que se adapta a qualquer projeto.</Text>
        </Stack>
      </Center>
    </Page>
  );
}
