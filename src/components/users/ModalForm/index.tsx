import React, { useEffect } from 'react';
import { Button, Group, Modal, Stack, TextInput } from '@mantine/core';
import * as Yup from 'yup';

import { User, UserRequest } from '@/core/domain/users/users.types';
import { useForm, yupResolver } from '@mantine/form';

interface Props {
  open: boolean;
  user?: User;
  onSuccess: () => void;
  onClose: () => void;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('Informe um e-mail válido').required('Campo obrigatório'),
  role: Yup.string().required('Campo obrigatório'),
});

export function UsersFormModal({ open, user, onSuccess, onClose }: Props) {
  const form = useForm<UserRequest>({
    validate: yupResolver(schema),
  });

  async function handleSave(obj: UserRequest) {
    if (user) {
      console.log('Update user', obj);
    } else {
      console.log('Create user', obj);
    }

    onSuccess();
    onClose();
  }

  useEffect(() => {
    form.setValues({
      name: user?.name || '',
      email: user?.email || '',
      active: user?.active || true,
      role: user ? user?.role?.identifier : 'USER',
    });
  }, [user]);

  return (
    <Modal
      centered
      opened={open}
      title={user ? 'Editar usuário' : 'Novo usuário'}
      onClose={() => {
        form.reset();
        onClose();
      }}
    >
      <form onSubmit={form.onSubmit(handleSave)}>
        <Stack spacing="md">
          <TextInput withAsterisk label="Nome" placeholder="Nome do usuário" {...form.getInputProps('name')} />
          <TextInput withAsterisk label="E-mail" placeholder="EX: usuario@email.com" {...form.getInputProps('email')} />

          <Group position="right">
            <Button variant="subtle" onClick={() => onClose()}>
              Cancelar
            </Button>
            <Button variant="filled" type="submit">
              Salvar
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
