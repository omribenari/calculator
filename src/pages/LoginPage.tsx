import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core';
import { isEmail, matches, useForm } from '@mantine/form';
import { login } from '../auth/auth';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const { setUser } = useStore();
  const navigate = useNavigate();
  const form = useForm({
    validateInputOnBlur: true,
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('Invalid email'),
      password: matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        'Password should contain minimum eight characters, at least one letter and one number'
      ),
    },
  });

  const onLoginSubmit = async (values: { email: string; password: string }) => {
    try {
      const user = await login(values);
      if (user) {
        setUser(user);
        navigate('/');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Login
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(onLoginSubmit)}>
          <TextInput
            label="Email"
            placeholder="you@gmail.com"
            required
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
