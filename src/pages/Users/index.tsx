import React from 'react';
import { Column } from 'react-table';
import dayjs from 'dayjs';
import { ActionIcon, Badge, Button, Group, Text } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons';

import { Table } from '@/components/_commons/Table';
import { Page } from '@/components/_commons/Page';
import { UsersFilters } from '@/components/users/FIlters';
import { User } from '@/core/domain/users/users.types';

export function UsersPage() {
  const data = React.useMemo<User[]>(
    () => [
      {
        id: 1,
        name: 'Administrador',
        email: 'admin@email.com',
        role: { name: 'Admin', identifier: 'ADMIN' },
        active: true,
        created_at: '2023-02-25',
        updated_at: '2023-02-25',
      },
      {
        id: 2,
        name: 'Thomas Silva',
        email: 'thomaz@email.com',
        role: { name: 'Gerente', identifier: 'MANAGER' },
        active: false,
        created_at: '2023-02-25',
        updated_at: '2023-02-25',
      },
    ],
    [],
  );

  const columns = React.useMemo<Column<User>[]>(
    () => [
      {
        Header: 'Nome',
        accessor: 'name', // accessor is the "key" in the data,
      },
      {
        Header: 'E-mail',
        accessor: 'email',
      },
      {
        Header: 'Grupo',
        accessor: 'role',
        Cell: (row) => <>{row.cell.value.name}</>,
      },
      {
        Header: 'Ativo',
        accessor: 'active',
        Cell: (row) =>
          row.cell.value === true ? (
            <Badge variant="filled" color="teal">
              Sim
            </Badge>
          ) : (
            <Badge variant="filled" color="red">
              Não
            </Badge>
          ),
      },
      {
        Header: 'Data da criação',
        accessor: 'created_at',
        Cell: (row) => <>{dayjs(row.cell.value).format('DD/MM/YYYY')}</>,
      },
      {
        Header: 'Última atualização',
        accessor: 'updated_at',
        Cell: (row) => <>{dayjs(row.cell.value).format('DD/MM/YYYY')}</>,
      },
      {
        Header: () => <Text align="right">Ações</Text>,
        accessor: 'id',
        Cell: () => (
          <Group position="right" miw={100}>
            <ActionIcon variant="outline">
              <IconEdit size={18} />
            </ActionIcon>
            <ActionIcon variant="outline" color="red">
              <IconTrash size={18} />
            </ActionIcon>
          </Group>
        ),
      },
    ],
    [],
  );

  return (
    <Page title="Usuários">
      <Table columns={columns} data={data} filters={<UsersFilters />} extra={<Button>Novo usuário</Button>} />
    </Page>
  );
}
