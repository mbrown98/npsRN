import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {appleAuth} from '@invertase/react-native-apple-authentication';

const AUTH = {
  signIn: async provider => {
    const cred = await AUTH.determineCred(provider);

    // Sign-in the user with the credential
    try {
      auth()
        .signInWithCredential(cred)
        .then(async user => {
          const uid = user.user.uid;

          const res = await firestore().collection('users').doc(uid).get();

          if (!res.exists) {
            firestore()
              .collection('users')
              .doc(uid)
              .set({user: user.user.email, favorites: {}, visited: {}});
          }
        });
    } catch (error) {
      console.log('error', error);
    }
  },
  deleteAccount: async () => {
    try {
      const user = firebase.auth().currentUser;

      const cred = await AUTH.determineCred(user.providerData[0].providerId);
      user
        .reauthenticateWithCredential(cred)
        .then(u => u.user.delete())
        .then(res => firestore().collection('users').doc(user.uid).delete())
        .then(res => {
          console.log('USER DELETE SUCCESSFUL');
        });
    } catch (error) {
      console.log('eeee', error);
    }
  },
  signOut: async () => {
    auth()
      .signOut()
      .then(() => AsyncStorage.removeItem('ONBOARD_COMPLETE'))
      .catch(e => console.log('e'));
  },
  determineCred: async provider => {
    switch (provider) {
      case 'apple':
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
