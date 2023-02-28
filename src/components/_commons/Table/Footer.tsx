import React from 'react';
import { Grid, Pagination, Select } from '@mantine/core';

export function TableFooter() {
  return (
    <Grid align="flex-end">
      <Grid.Col span={12} sm={4} md={4} xl={3}>
        <Select defaultValue="10" label="Número de linhas" data={['10', '20', '50']} />
      </Grid.Col>
      <Grid.Col span={12} sm={4} md={4} xl={3}>
        <Select
          defaultValue="Nome"
          label="Ordenar por"
          data={['Nome', 'E-mail', 'Data da criação', 'Úlima atualização']}
        />
      </Grid.Col>
      <Grid.Col span={12} sm={4} md={4} xl={3}>
        <Select defaultValue="Ascendente" label="Ordem" data={['Ascendente', 'Descendente']} />
      </Grid.Col>
      <Grid.Col span={12} xl={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination total={10} />
      </Grid.Col>
    </Grid>
  );
}
