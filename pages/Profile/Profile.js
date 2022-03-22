import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useAuth} from '../../context/auth-context';
import {getFavoriteParks} from '../../api/firebase/parks';
import axios from 'axios';
import {getAllParks} from '../../offline/downloadParkData';
import {ASYNC_STORE} from '../../offline/storage';

export default function Profile() {
  const {user} = useAuth();
  console.log(user.uid);

  return (
    <SafeAreaView>
      <Button
        title="Google Sign-Out"
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        }
      />
      <Button title="Get Favs" onPress={() => getFavoriteParks()} />
      <Button title="Get All Parks" onPress={() => getAllParks()} />
      <Button title="Get Yell" onPress={() => ASYNC_STORE.read('yell')} />
      <Text>{JSON.stringify(user.uid)}</Text>
    </SafeAreaView>
  );
}
