// /src/Components/Entrants.jsx

import React, { createContext, useContext } from 'react';

const LargeObjectContext = createContext();

const LargeObjectProvider = ({ children }) => {
    const largeObject = {
        users: [
          {
            id: 1,
            username: 'john_doe',
            email: 'john@example.com',
          },
          {
            id: 2,
            username: 'jane_smith',
            email: 'jane@example.com',
          },
          // ... add more user objects as needed
        ],
        settings: {
          theme: 'light',
          language: 'en',
          // ... other settings
        },
        // ... other data
      };
      
  return (
    <LargeObjectContext.Provider value={largeObject}>
      {children}
    </LargeObjectContext.Provider>
  );
};

const useLargeObject = () => {
  return useContext(LargeObjectContext);
};

export { LargeObjectProvider, useLargeObject };
