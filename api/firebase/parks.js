import firestore from '@react-native-firebase/firestore';

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
