import React from 'react';
import { Global } from '@mantine/core';

export function GlobalStyles() {
  return (
    <Global
      styles={() => ({
        'html, body, #root': {
          height: '100vh',
        },
      })}
    />
  );
}
