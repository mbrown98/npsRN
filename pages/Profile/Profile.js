import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Profile() {
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
    </SafeAreaView>
  );
}
