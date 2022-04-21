import axios from 'axios';
import {useQuery} from 'react-query';
import {genApiKey} from './genAPIKey';

const getGroupParkData = async (field, parkIds) => {
  const URL = `https://developer.nps.gov/api/v1/${field}?parkCode=${_genParksQuery(
    parkIds[0],
  )}&api_key=${genApiKey()}`;

  return axios
    .get(URL)
    .then(async res => {
      return res.data.data;
    })
    .catch(e => {
      console.log('e', e);
      return [];
    });
};

const _genParksQuery = arr => {
  let parksString = '';
  const parkCodes = Object.keys(arr);
  parkCodes.forEach((pc, i) => {
    parksString += pc;
    if (i !== parkCodes.length - 1) {
      parksString += ',';
    }
  });
  return parksString;
};

const useGroupParkData = (field, parkId) =>
  useQuery(['fullPark', field, parkId], () => getGroupParkData(field, parkId), {
    refetchOnMount: false,
  });
export default useGroupParkData;
