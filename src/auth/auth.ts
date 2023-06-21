export interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface LoginData {
  email: string;
  password: string;
}

const users: Array<User> = [
  {
    name: 'Omri',
    email: 'omri79@gmail.com',
    password: 'Omri1234',
    avatar: 'https://avatars.githubusercontent.com/u/10001?v=4',
  },
];

export const login = async ({ email, password }: LoginData) => {
  const user = users.find((user) => user.email === email);
  if (user && user.password === password) {
    return user;
  }
  throw new Error('Wrong email or password');
};
