import React, { useState, useEffect } from 'react';
import './App.css';
import { UserList } from './Components/Entrant_List.jsx';

const App = () => {
  return (
    <div>
      <h1>Your App</h1>
       <UserList />
    </div>
  );
};

export default App;