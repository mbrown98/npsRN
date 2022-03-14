import {useQuery} from 'react-query';
import axios from 'axios';

const NPS_URL_BASE = 'https://developer.nps.gov/api/v1';

const K = 'xVDrllRsZGSuU1sLpzu687U6R8bZG9NpU4W2wwSM';

const fetchParkData = async parkId => {
  const query = `/parks?parkCode=${parkId}`;
  const URL = `${NPS_URL_BASE}${query}?&api_key=${K}`;
  const {data} = await axios.get(`${URL}`);
  return data.data[0];
};

const useParkByID = parkId =>
  useQuery(['park', parkId], () => fetchParkData(parkId));
export default useParkByID;
