import AsyncStorage from '@react-native-async-storage/async-storage';

export const ASYNC_STORE = {
  store: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      const res = await AsyncStorage.setItem(`@${key}`, jsonValue);
      return res;
    } catch (e) {
      // saving error
      console.log('e', e);
      return false;
    }
  },
  read: async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@${key}`);
      const parsedVal = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log('parsed val', parsedVal);
      return parsedVal;
    } catch (e) {
      // error reading value
    }
  },
};
