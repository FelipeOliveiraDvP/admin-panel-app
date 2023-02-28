import { createStyles } from '@mantine/core';

export const tableStyles = createStyles((theme, _, getRef) => ({
  wrapper: {
    display: 'block',
    maxWidth: '100%',
  },

  tableWrap: {
    display: 'block',
    maxWidth: '100%',
    overflowX: 'auto',
    overflowY: 'hidden',
    borderRadius: theme.defaultRadius,
  },

  table: {
    width: '100%',
    borderSpacing: 0,

    tr: {
      ':last-child': {
        td: {
          borderBottom: 0,
        },
      },
    },

    'th, td': {
      margin: 0,
      padding: '0.5rem',
      width: '1%',
      [`&.${getRef('collapse')}`]: {
        width: '0.0000000001%',
      },
      ':last-child': {
        borderRight: 0,
      },
    },
  },
}));
