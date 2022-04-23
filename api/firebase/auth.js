import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const AUTH = {
  signIn: async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in
      .then(async user => {
        const uid = user.user.uid;
        const res = await firestore().collection('users').doc(uid).get();

        if (!res.exists) {
          firestore()
            .collection('users')
            .doc(uid)
            .set({favorites: {}, visited: {}});
        }
      })
      .catch(e => console.log('e', e));
  },
  signOut: async () => {
    auth()
      .signOut()
      .then(() => AsyncStorage.removeItem('ONBOARD_COMPLETE'))
      .catch(e => console.log('e'));
  },
};

export default AUTH;

// const data = {
//   additionalUserInfo: {
//     isNewUser: false,
//     profile: {
//       at_hash: 'vVZAhwvyRfr0IYKuCx3Z0A',
//       aud: '12398867805-3t8ijtejc7dibs5rmorc3u1umqsnth3i.apps.googleusercontent.com',
//       azp: '12398867805-3t8ijtejc7dibs5rmorc3u1umqsnth3i.apps.googleusercontent.com',
//       email: 'matthewbrown0798@gmail.com',
//       email_verified: true,
//       exp: 1649545048,
//       family_name: 'Brown',
//       given_name: 'Matthew',
//       iat: 1649541448,
//       iss: 'https://accounts.google.com',
//       locale: 'en',
//       name: 'Matthew Brown',
//       nonce: 'cTqcNz7691iur-VGI4CR5bPbKeP_iRWbCAdfTBbH84M',
//       picture:
//         'https://lh3.googleusercontent.com/a-/AOh14GijU4uGuu4uoCDociKiaF5w91EPpR1_maJyIrzY3w=s96-c',
//       sub: '105173317012470160362',
//     },
//     providerId: 'google.com',
//     username: null,
//   },
//   user: {
//     displayName: 'Matthew Brown',
//     email: 'matthewbrown0798@gmail.com',
//     emailVerified: true,
//     isAnonymous: false,
//     metadata: [Object],
//     phoneNumber: null,
//     photoURL:
//       'https://lh3.googleusercontent.com/a-/AOh14GijU4uGuu4uoCDociKiaF5w91EPpR1_maJyIrzY3w=s96-c',
//     providerData: [Array],
//     providerId: 'firebase',
//     refreshToken:
//       'AIwUaOno9RdfawLyOyo5wq4s2tjZ1Ni6-p43mxL1zwSW08J3bwMso-9bQD_C4XqbgSuZzL9fYRHwyUUIUie4tfM5XUXUdC6-bcLie9EXjFUbGGgmKoN1zdaPTyq_y2pso6HKi0k2z16p8uhKznfPvhP9mOtO5ysKyw2BjPCzuSyIvtr33WK6V7aZPz8wl5Kcvr3f2nHEgz1G6wOAcwIMgjsxbQ6VV27bm9CSRRqzbHOQmlJkzkPRdl2ejJ0-WsvIkN9zMJZLFovUnICFgFbUw9a_yr4mQQp1rEMaZVd3xVOMqYALtq0GT1_0Zd4I7AsXDJbxA_12rXs7ob_5M_qOcztd7WW5YmtK3zY8Zy2fE7yUKGqAODojLDapGpS0wEhcs_wjz8STF5TkZnzvWhsXBzaRaDE1lAuv1w0oPEhI4DYr6J6-i7bftQ4',
//     tenantId: null,
//     uid: 'Z951pYBQbqZ6uiyY39Nh92x06rE2',
//   },
// };
