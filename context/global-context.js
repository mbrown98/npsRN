import React, {useState, createContext, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useAuth} from './auth-context';

const GlobalContext = createContext(undefined);

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('Global context must be used within a global provider');
  }
  return context;
}

const GlobalProvider = ({...props}) => {
  const {user} = useAuth();
  const [onboardComplete, setOnboardComplete] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('ONBOARD_COMPLETE').then(value => {
      if (!value) {
        setOnboardComplete('NOT_COMPLETE');
      } else {
        setOnboardComplete('COMPLETE');
      }
    });
  }, [user]);

  useEffect(() => {
    if (onboardComplete && user) {
      AsyncStorage.setItem('ONBOARD_COMPLETE', 'COMPLETE');
    }
  }, [onboardComplete, user]);

  return (
    <GlobalContext.Provider
      value={{onboardComplete, setOnboardComplete}}
      {...props}
    />
  );
};

export {GlobalProvider, useGlobal};
