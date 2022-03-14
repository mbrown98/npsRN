import React, {useState, createContext, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const GlobalContext = createContext(undefined);

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('Global context must be used within a global provider');
  }
  return context;
}

const GlobalProvider = ({...props}) => {
  const [onboardComplete, setOnboardComplete] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('DEMO_APP::COUNT_VALUE').then(value => {
      if (value) {
        console.log('valueeee', value);
      }
    });
  }, []);

  return <GlobalContext.Provider value={{name: 'matt'}} {...props} />;
};

export {GlobalProvider, useGlobal};
