import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

export const isAuth = () => {
  const user = firebase.auth().currentUser;
  if (!user) {
    throw Error('Not Auth');
  }
  return user;
};
export const getFeaturedParks = async () => {
  return await firestore()
    .collection('admin')
    .doc('parks')
    .get()
    .then(res => {
      const data = res._data.parks;
      return data;
    })
    .catch(e => null);
};

export const getFavoriteParks = async () => {
  try {
    const {uid} = isAuth();
    const res = await firestore().collection('userData').doc(uid).get();
    return res._data.favorites;
  } catch (error) {
    console.log(error);
    return null;
  }
};
