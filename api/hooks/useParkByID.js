import {useQuery} from '@tanstack/react-query';
import {ASYNC_STORE} from '../../offline/storage';

export const fetchParkData = async parkId => {
  const storedVal = await ASYNC_STORE.read(parkId);
  return storedVal;
};

const useParkByID = parkId =>
  useQuery({
    queryKey: ['park', parkId],
    queryFn: () => fetchParkData(parkId),
  });
export default useParkByID;
