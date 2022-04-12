import axios from 'axios';
import {useQuery} from 'react-query';

const getGroupParkData = async (field, parkIds) => {
  console.log('getting group: ', field);
  const parksString = 'yell,acad,alca';
  const URL = `https://developer.nps.gov/api/v1/${field}?parkCode=${parksString}&api_key=xVDrllRsZGSuU1sLpzu687U6R8bZG9NpU4W2wwSM`;

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

const useGroupParkData = (field, parkId) =>
  useQuery(['fullPark', field, parkId], () => getGroupParkData(field, parkId), {
    refetchOnMount: false,
  });
export default useGroupParkData;
