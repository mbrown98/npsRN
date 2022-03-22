import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE = {
  store: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@${key}`, jsonValue);
    } catch (e) {
      // saving error
    }
  },
  read: async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@${key}`);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  },
};
