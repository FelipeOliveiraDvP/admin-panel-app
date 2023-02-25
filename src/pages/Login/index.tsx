import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Anchor, Button, Card, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';

import { useAuth } from '@/core/contexts/AuthContext';
import { User } from '@/core/domain/users/users.types';
import { LoginRequest } from '@/core/domain/auth/auth.types';

const schema = Yup.object().shape({
  email: Yup.string().email('Informe um e-mail válido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const form = useForm<LoginRequest>({
    validate: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  function handleLogin(values: LoginRequest) {
    const user: User = {
      id: 1,
      name: 'Usuário',
      email: values.email,
      active: true,
      role: {
        name: 'Administrador',
        identifier: 'ADMIN',
      },
    };

    login({ user, token: 'abc123' }, () => navigate('/app/dashboard'));
  }

  return (
    <Card withBorder style={{ width: 400 }}>
      <Text weight={600} mb="md">
        Login
      </Text>

      <form onSubmit={form.onSubmit(handleLogin)}>
        <Stack spacing="md">
          <TextInput withAsterisk label="E-mail" placeholder="seuemail@email.com" {...form.getInputProps('email')} />
          <PasswordInput withAsterisk label="Senha" placeholder="Sua senha" {...form.getInputProps('password')} />

          <Button type="submit">Entrar</Button>

          <Anchor component={Link} to="/forgot">
            Esqueci minha senha
          </Anchor>
        </Stack>
      </form>
    </Card>
  );
}
