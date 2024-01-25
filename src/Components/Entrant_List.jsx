import React from 'react';
import { useLargeObject } from './Entrants.jsx';

const UserList = () => {
  const { users } = useLargeObject();

  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export {UserList} ;
