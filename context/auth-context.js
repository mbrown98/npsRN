import React, {useState, createContext, useContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {downloadAllParkDataToStore} from '../offline/downloadAllParkDataToStore';
import {fetchParkData} from '../api/hooks/useParkByID';

const AuthContext = createContext(undefined);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Auth must be used within an auth provider');
  }
  return context;
}

const AuthProvider = ({...props}) => {
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    // on app launch, check if park data is downloaded
    setInitializing(true);
    fetchParkData('yell').then(yellParkData => {
      if (!yellParkData) {
        console.log('no yell park data');
        downloadAllParkDataToStore().then(parks => {
          if (parks) {
            setInitializing(false);
          } else {
            console.log('we have an error');
            // we have an error
          }
        });
      } else {
        // yell park data exists, we are good to go
        setInitializing(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser, initializing}} {...props} />
  );
};

export {AuthProvider, useAuth};
