import React, { ReactNode } from 'react';
import { Accordion } from '@mantine/core';
import { IconFilter } from '@tabler/icons';

interface Props {
  filters?: ReactNode | ReactNode[];
}

export function TableHeader({ filters }: Props) {
  return (
    <Accordion variant="separated">
      <Accordion.Item value="filters">
        <Accordion.Control icon={<IconFilter size={20} />}>Filtros</Accordion.Control>
        <Accordion.Panel>{filters}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
