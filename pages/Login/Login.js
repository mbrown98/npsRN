import React from 'react';
import {View, Text, SafeAreaView, Button, ImageBackground} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useAuth} from '../../context/auth-context';
import {IMAGES} from '../../assets/images';

async function googleSignIn() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const user_sign_in = auth().signInWithCredential(googleCredential);

  user_sign_in
    .then(res => console.log('resss:', res))
    .catch(e => console.log('e', e));
}

export default function Login() {
  const {user} = useAuth();
  return (
    // <SafeAreaView>
    <ImageBackground source={IMAGES.login.tallTrees} style={{flex: 1}}>
      <SafeAreaView>
        <Button
          title="Google Sign-In"
          onPress={() =>
            googleSignIn().then(() => console.log('Signed in with Google!'))
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
