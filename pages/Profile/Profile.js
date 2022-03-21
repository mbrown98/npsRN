import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useAuth} from '../../context/auth-context';
import {getFavoriteParks} from '../../api/firebase/parks';
import axios from 'axios';

export default function Profile() {
  const {user} = useAuth();
  console.log(user.uid);

  const getAllParks = async () => {
    axios
      .get(
        'https://developer.nps.gov/api/v1/parks?limit=500&api_key=xVDrllRsZGSuU1sLpzu687U6R8bZG9NpU4W2wwSM',
      )
      .then(res => {
        // console.log(res.data);

        const data = res.data.data;
        if (data) console.log('data', typeof data);
        console.log(
          data.map(opt => ({
            parkCode: opt.parkCode,
            fullName: opt.fullName,
          })),
        );
      });
  };
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
      <Text>{JSON.stringify(user.uid)}</Text>
    </SafeAreaView>
  );
}
