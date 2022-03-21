import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
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
  const user = firebase.auth().currentUser;
  if (!user) return null;
  return await firebase
    .firestore()
    .collection('userData')
    .doc('8TH0cNGWRPcndsgc5zpslKcZu6F2')
    .get()
    .then(res => {
      const data = res._data;

      return data;
    })
    .catch(e => {
      console.log(e);
      return null;
    });
};
