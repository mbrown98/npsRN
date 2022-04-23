import {useQuery} from 'react-query';
import {ASYNC_STORE} from '../../offline/storage';

export const fetchParkData = async parkId => {
  const storedVal = await ASYNC_STORE.read(parkId);
  return storedVal;
};

const useParkByID = parkId =>
  useQuery(['park', parkId], () => fetchParkData(parkId));
export default useParkByID;
