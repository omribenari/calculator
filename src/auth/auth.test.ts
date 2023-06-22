import { login } from './auth';

describe('login', () => {
  const validLoginData = {
    email: 'omri79@gmail.com',
    password: 'Omri1234',
  };

  const invalidLoginData = {
    email: 'invalid@example.com',
    password: 'invalid',
  };

  test('should return the user object when valid login data is provided', async () => {
    const user = await login(validLoginData);
    expect(user).toBeDefined();
    expect(user.name).toBe('Omri');
    expect(user.email).toBe('omri79@gmail.com');
  });

  test('should throw an error when invalid login data is provided', async () => {
    await expect(login(invalidLoginData)).rejects.toThrow(
      'Wrong email or password'
    );
  });
});
