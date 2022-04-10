import axios from 'axios';

export const getParksNews = async () => {
  return axios
    .get('')
    .then(async res => {
      return res.data.data;
    })
    .catch(e => {
      return [];
    });
};
