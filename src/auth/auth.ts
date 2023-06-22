export interface User {
  name: string;
  email: string;
  password: string;
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
  },
  {
    name: 'Shaul',
    email: 'Shaul@gmail.com',
    password: 'Shaul1234',
  },
];

export const login = async ({ email, password }: LoginData) => {
  const user = users.find((user) => user.email === email);
  if (user && user.password === password) {
    return user;
  }
  throw new Error('Wrong email or password');
};
