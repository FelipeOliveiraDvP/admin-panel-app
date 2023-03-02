import React, { ReactNode } from 'react';
import { Button, Group, Modal, Stack } from '@mantine/core';

interface Props {
  open: boolean;
  title: ReactNode;
  children?: ReactNode;
  onRemove: () => void;
  onCancel: () => void;
}

export function RemoveModal({ open, title, children, onRemove, onCancel }: Props) {
  return (
    <Modal centered opened={open} onClose={onCancel} title={title}>
      <Stack spacing="md">
        {children}
        <Group position="right">
          <Button variant="subtle" onClick={() => onCancel()}>
            Cancelar
          </Button>
          <Button variant="filled" color="red" onClick={() => onRemove()}>
            Remover
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
