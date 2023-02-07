interface User {
  name: string;
  email: string;
  password: string;
}

const user1 = {
  id: 1,
  name: 'Super Admin',
  email: 'super-admin@mail',
  password: 'Abc12345',
};

const user2 = {
  id: 2,
  name: 'User',
  email: 'user@mail.wehost',
  password: 'Abc12345',
};

const user3 = {
  id: 3,
  name: 'App Operator',
  email: 'app-operator@mail',
  password: 'Abc12345',
};

export const usersSeed: User[] = [user1, user2, user3];