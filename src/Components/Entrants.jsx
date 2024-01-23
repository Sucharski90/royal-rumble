import React, { createContext, useContext } from 'react';

const LargeObjectContext = createContext();

const LargeObjectProvider = ({ children }) => {
  const largeObject = {
    user: {
        id: 1,
        username: 'exampleUser',
        email: 'example@example.com',
        // ... other user details
      },
      settings: {
        theme: 'light',
        language: 'en',
        // ... other settings
      },
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

// Wrap your app with LargeObjectProvider in index.js or App.js
