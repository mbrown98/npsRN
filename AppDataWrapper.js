import React from 'react';
import {GlobalProvider} from './context/global-context';
import App from './App';
import {AuthProvider} from './context/auth-context';

export default function AppDataWrapper() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GlobalProvider>
  );
}
