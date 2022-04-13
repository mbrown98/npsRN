import React from 'react';
import {GlobalProvider} from './context/global-context';
import App from './App';
import {AuthProvider} from './context/auth-context';
import {FirebaseProvider} from './context/firebase-content';

export default function AppDataWrapper() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </GlobalProvider>
    </AuthProvider>
  );
}
