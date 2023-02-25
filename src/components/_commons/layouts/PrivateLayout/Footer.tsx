import React from 'react';
import { Flex, Footer, Text } from '@mantine/core';

export function PrivateFooter() {
  return (
    <Footer height={40} p="md">
      <Flex h="100%" justify="flex-end" align="center">
        <Text size="xs">Todos os direitos reservados</Text>
      </Flex>
    </Footer>
  );
}
