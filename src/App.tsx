import React from 'react';
import { UserContextProvider } from './context/UserContext';
import RouterApp from './routerApp';

import './App.css';

function App() {
  return (
    <>
      <UserContextProvider>
      <RouterApp />
      </UserContextProvider>
    </>
  );
}

export default App;
