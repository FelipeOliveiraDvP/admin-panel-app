import React from 'react';
import { Input, Select, SimpleGrid } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { IconCalendar, IconSearch } from '@tabler/icons';

export function UsersFilters() {
  return (
    <SimpleGrid
      cols={5}
      breakpoints={[
        { maxWidth: 'sm', cols: 1 },
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'lg', cols: 4 },
        { maxWidth: 'xl', cols: 5 },
      ]}
    >
      <Input icon={<IconSearch size={16} />} placeholder="Pesquisar usuário" />
      <Select placeholder="Grupo" data={['Admin', 'Gerente']} clearable />
      <Select placeholder="Ativo" data={['Sim', 'Não']} clearable />
      <DatePicker
        locale="pt-br"
        inputFormat="DD/MM/YYYY"
        placeholder="Data da criação"
        icon={<IconCalendar size={16} />}
      />
      <DatePicker
        locale="pt-br"
        inputFormat="DD/MM/YYYY"
        placeholder="Última atualização"
        icon={<IconCalendar size={16} />}
      />
    </SimpleGrid>
  );
}
