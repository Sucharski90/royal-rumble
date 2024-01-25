import React from 'react';
import { LargeObjectProvider } from './Components/Entrants'; // Adjust the path based on your actual structure
import EntrantList from './Components/Entrant_List'; // Adjust the path based on your actual structure

const App = () => {
  return (
    <LargeObjectProvider>
      <div>
        <h1>Your App</h1>
        <EntrantList />
        {/* Add other components or content here */}
      </div>
    </LargeObjectProvider>
  );
};

export default App;
