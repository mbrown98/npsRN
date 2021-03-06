import React, {useState, createContext, useContext, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useAuth} from './auth-context';

const FirebaseContext = createContext(undefined);

function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('Auth must be used within an auth provider');
  }
  return context;
}

const FirebaseProvider = ({...props}) => {
  const {user} = useAuth();
  const [userData, setUserData] = useState({favorites: {}, visited: {}});

  useEffect(() => {
    if (!user) {
      setUserData({favorites: {}, visited: {}});
      return;
    }
    const subscriber = firestore()
      .collection('users')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        const data = documentSnapshot.data();

        setUserData({...userData, ...data});
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [user]);
  return <FirebaseContext.Provider value={{userData}} {...props} />;
};

export {FirebaseProvider, useFirebase};
