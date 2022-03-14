import React from 'react';
import {GlobalProvider} from './context/global-context';
import App from './App';

export default function AppDataWrapper() {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
}
