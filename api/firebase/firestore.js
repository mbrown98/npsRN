import firestore from '@react-native-firebase/firestore';

export const FIRESTORE = {
  updateUserFavorites: async (uid, data) => {
    await firestore()
      .collection('users')
      .doc(uid)
      .update({favorites: data})
      .then(() => {
        console.log('User added!');
      })
      .catch(e => console.log('e', e));
  },
  updateUserVisited: async (uid, data) => {
    await firestore()
      .collection('users')
      .doc(uid)
      .update({visited: data})
      .then(() => {
        console.log('User added!');
      })
      .catch(e => console.log('e', e));
  },
};
