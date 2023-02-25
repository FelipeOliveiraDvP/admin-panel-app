import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Button, Card, PasswordInput, Stack, Text } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';

import { RecoveryRequest } from '@/core/domain/auth/auth.types';

const schema = Yup.object().shape({
  password: Yup.string().required('Campo obrigatório'),
  password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'As senhas não são iguais'),
});

export function RecoveryPage() {
  const form = useForm<RecoveryRequest>({
    validate: yupResolver(schema),
    initialValues: {
      token: '',
      password: '',
      password_confirmation: '',
    },
  });

  function handleRecovery(values: RecoveryRequest) {
    console.log(values);
  }

  return (
    <Card withBorder style={{ width: 400 }}>
      <Text weight={600} mb="md">
        Alterar minha senha
      </Text>

      <form onSubmit={form.onSubmit(handleRecovery)}>
        <Stack spacing="md">
          <PasswordInput withAsterisk label="Nova senha" placeholder="Sua senha" {...form.getInputProps('password')} />
          <PasswordInput
            withAsterisk
            label="Confirmar sua senha"
            placeholder="Sua senha"
            {...form.getInputProps('password_confirmation')}
          />

          <Button type="submit">Alterar senha</Button>

          <Anchor component={Link} to="/">
            Ir para o login
          </Anchor>
        </Stack>
      </form>
    </Card>
  );
}
