import firestore from '@react-native-firebase/firestore';

export const FIRESTORE = {
  updateUserFavorites: async (uid, updatedFavs) => {
    await firestore()
      .collection('users')
      .doc(uid)
      .update({favorites: updatedFavs})
      .then(() => {
        console.log('User added!');
      })
      .catch(e => console.log('e', e));
  },
};
