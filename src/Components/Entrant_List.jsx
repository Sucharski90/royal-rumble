// Entrant_List.jsx

import React from 'react';
import { useLargeObject } from './Entrants'; // Adjust the path based on your actual structure

const EntrantList = () => {
  const { users, settings } = useLargeObject();

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

export default EntrantList;
