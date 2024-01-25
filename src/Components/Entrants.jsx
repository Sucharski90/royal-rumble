import React, { createContext, useContext } from 'react';

const LargeObjectContext = createContext();

const LargeObjectProvider = ({ children }) => {
  const largeObject = {
    rumble_1988: [
        {
          id: 1,
          name: 'exampleUser1',
          time: 'user1@example.com',
        },
        {
          id: 2,
          name: 'exampleUser2',
          time: 'user2@example.com',
        },
      ],
      rumble_1989: [
        {
          id: 1,
          name: 'exampleUser1',
          time: 'user1@example.com',
        },
        {
          id: 2,
          name: 'exampleUser2',
          time: 'user2@example.com',
        },
      ]
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
export { useLargeObject };