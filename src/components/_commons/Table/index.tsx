import React, { ReactNode } from 'react';
import { Column, useTable } from 'react-table';
import { Flex, Table as MantineTable } from '@mantine/core';

import { tableStyles } from './styles';
import { TableFooter } from './Footer';
import { TableHeader } from './Header';

interface Props<T extends object> {
  columns: Column<T>[];
  data: T[];
  filters?: ReactNode | ReactNode[];
  extra?: ReactNode | ReactNode[];
}

export function Table<T extends object>({ columns, data, filters, extra }: Props<T>) {
  const { classes } = tableStyles();
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <>
      <Flex justify="flex-end">{extra}</Flex>
      <TableHeader filters={filters} />
      <div className={classes.wrapper}>
        <div className={classes.tableWrap}>
          <MantineTable
            {...getTableProps({ className: classes.table })}
            withBorder
            highlightOnHover
            verticalSpacing="xs"
          >
            <thead>
              {headerGroups.map((headerGroup) => {
                const { key, className, role, style } = headerGroup.getHeaderGroupProps();

                return (
                  <tr key={key} className={className} role={role} style={style}>
                    {headerGroup.headers.map((column) => {
                      const { key, className, role, style } = column.getHeaderProps();

                      return (
                        <th key={key} className={className} role={role} style={style}>
                          {column.render('Header')}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                const { key, className, role, style } = row.getRowProps();

                return (
                  <tr key={key} className={className} role={role} style={style}>
                    {row.cells.map((cell) => {
                      const { key, className, role, style } = cell.getCellProps();

                      return (
                        <td key={key} className={className} role={role} style={style}>
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </MantineTable>
        </div>
      </div>
      <TableFooter />
    </>
  );
}
