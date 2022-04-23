import {KEYS} from '@env';

export const genApiKey = () => {
  const arr = KEYS.split('+++');
  const key = arr[Math.floor(Math.random() * arr.length)];
  console.log(key);
  return key;
};
