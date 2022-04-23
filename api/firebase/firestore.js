import firestore from '@react-native-firebase/firestore';

export const FIRESTORE = {
  toggleUserPark: async (uid, key, park) => {
    firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then(doc => {
        const exists = doc._data[key][park];
        firestore()
          .collection('users')
          .doc(uid)
          .update({
            [`${key}.${park}`]: exists
              ? firestore.FieldValue.delete()
              : Date.now(),
          });
      })
      .catch(e => console.log('ERROR!!!!!!', e));
  },
};
