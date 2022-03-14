import React from 'react';
import {View, Text} from 'react-native';
import {GlobalProvider} from './context/global-context';
import App from './App';

export default function AppDataWrapper() {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
}
