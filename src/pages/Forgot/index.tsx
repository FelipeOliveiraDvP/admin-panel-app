import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Button, Card, Stack, Text, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';

import { ForgotRequest } from '@/core/domain/auth/auth.types';

const schema = Yup.object().shape({
  email: Yup.string().email('Informe um e-mail válido').required('Campo obrigatório'),
});

export function ForgotPage() {
  const form = useForm<ForgotRequest>({
    validate: yupResolver(schema),
    initialValues: {
      email: '',
    },
  });

  function handleForgot(values: ForgotRequest) {
    console.log(values);
  }

  return (
    <Card withBorder style={{ width: 400 }}>
      <Text weight={600} mb="md">
        Recuperação de senha
      </Text>

      <form onSubmit={form.onSubmit(handleForgot)}>
        <Stack spacing="md">
          <TextInput
            withAsterisk
            label="E-mail de recuperação de senha"
            placeholder="seuemail@email.com"
            {...form.getInputProps('email')}
          />

          <Button type="submit">Enviar e-mail de recuperação</Button>

          <Anchor component={Link} to="/">
            Voltar para o login
          </Anchor>
        </Stack>
      </form>
    </Card>
  );
}
