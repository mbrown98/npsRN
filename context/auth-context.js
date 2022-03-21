import React, {useState, createContext, useContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const AuthContext = createContext(undefined);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Auth must be used within an auth provider');
  }
  return context;
}

const AuthProvider = ({...props}) => {
  console.log('autttthh');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <AuthContext.Provider value={{user, setUser}} {...props} />;
};

export {AuthProvider, useAuth};
