import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {FIRESTORE} from './firestore';

const AUTH = {
  signIn: async provider => {
    AUTH.determineCred(provider)
      .catch(e => console.log('Failed to create cred'))
      .then(cred => auth().signInWithCredential(cred))
      .catch(e => console.log('failed to sign in with cred'))
      .then(user => FIRESTORE.createUserDoc(user.user))
      .catch(e => console.log('failed to create user doc'));
  },
  guestSignIn: async () => {
    auth()
      .signInAnonymously()
      .then(user => FIRESTORE.createUserDoc(user.user))
      .catch(e => console.log('failed to sign in as guest', e));
  },

  deleteAccount: async () => {
    try {
      const user = firebase.auth().currentUser;
      AUTH.determineCred(user.providerData[0].providerId)
        .then(cred => user.reauthenticateWithCredential(cred))
        .then(u => u.user.delete())
        .then(() => firestore().collection('users').doc(user.uid).delete())
        .then(() => AsyncStorage.removeItem('ONBOARD_COMPLETE'));
    } catch (error) {
      console.log('e', error);
      return 'failed';
    }
  },
  signOut: async () => {
    const user = firebase.auth().currentUser;

    auth()
      .signOut()
      .catch(e => console.log('failed to sign out'))
      .then(() => AsyncStorage.removeItem('ONBOARD_COMPLETE'))
      .then(() => {
        if (!user.email) {
          firestore().collection('users').doc(user.uid).delete();
        }
      })
      .catch(e => console.log('failed to delete user'));
  },
  determineCred: async provider => {
    switch (provider) {
      case 'apple':
      case 'apple.com':
        return await AUTH.getAppleCredential();
      case 'google':
      case 'google.com':
        return await AUTH.getGoogleCredential();
      default:
        return null;
    }
  },
  getGoogleCredential: async () => {
    const {idToken} = await GoogleSignin.signIn();
    return auth.GoogleAuthProvider.credential(idToken);
  },
  getAppleCredential: async () => {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }

    // Create a Firebase credential from the response
    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    // Sign the user in with the credential
    return appleCredential;
  },
};

export default AUTH;

const u = {
  displayName: 'Matthew Brown',
  email: 'matthewbrown0798@gmail.com',
  emailVerified: true,
  isAnonymous: false,
  metadata: {creationTime: 1651160966107, lastSignInTime: 1651165281031},
  phoneNumber: null,
  photoURL:
    'https://lh3.googleusercontent.com/a-/AOh14GijU4uGuu4uoCDociKiaF5w91EPpR1_maJyIrzY3w=s96-c',
  providerData: [[Object]],
  providerId: 'firebase',
  refreshToken:
    'AIwUaOk-K85CeZKHC1pEXtNOC7BRiapYVFe0_kJz6Y7KzCPgSJSqas0ErXehAqotq1pqf_4sHJZa3dJLdDq3gFxpHC0iGY35jqHDCBLlMHoekmcSZbr14CX8ZSAyY-nGB_Q5LA-RsqxLftj9Z-ObgR-7vcRjOl6kd8PdDZfSRa2z0sT7yIP438jjtlTgT6B6kKfh4WaBcuWtRN7WdZLJv7QxyByQtHNfd8lUN4dORXtDfpUx5wzqqfNitbw_GkyBgJOJXqxee7OYde7MlHK-81XsqIaEvE2e8BA6sXjzdNLauEpHQA82Os6ZeyCrvMtO5v6cvVMWlEN1egquxktievz6fE6LRbnUB3R-4EhVFERlecKLoyng_yZdi_npiu0Y6NLCAfizJbM3srjnqm412NRVeP-HaJ13O3ZPmD2bFQf9oOz91o95F5w',
  tenantId: null,
  uid: 'QNkYaKStvaV2ICreqiIZVd7BeQg2',
};
