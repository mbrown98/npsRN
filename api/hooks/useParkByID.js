import {useQuery} from 'react-query';
// import axios from 'axios';
import {ASYNC_STORE} from '../../offline/storage';

// const NPS_URL_BASE = 'https://developer.nps.gov/api/v1';

// const K = 'xVDrllRsZGSuU1sLpzu687U6R8bZG9NpU4W2wwSM';

export const fetchParkData = async parkId => {
  const storedVal = await ASYNC_STORE.read(parkId);
  return storedVal;
  // console.log('made it here');
  // const query = `/parks?parkCode=${parkId}`;
  // const URL = `${NPS_URL_BASE}${query}?&api_key=${K}`;
  // const {data} = await axios.get(`${URL}`);
  // return data.data[0];
};

const useParkByID = parkId =>
  useQuery(['park', parkId], () => fetchParkData(parkId));
export default useParkByID;
