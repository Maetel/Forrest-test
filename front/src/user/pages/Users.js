import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'J lorem ipsum',
      image: 'https://picsum.photos/200/300',
      places: 1,
    },
    {
      id: 'u2',
      name: 'B lorem ipsum',
      image: 'https://picsum.photos/200/300',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
