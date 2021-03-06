import {useQuery} from 'react-query';
import axios from 'axios';
import {genApiKey} from './genAPIKey';

export const getFullParkData = async parkId => {
  const BASE_START = 'https://developer.nps.gov/api/v1/';

  const BASE_END = `?parkCode=${parkId}&api_key=${genApiKey()}`;

  const dataArr = [
    'alerts',
    // 'amenities/parksplaces',
    'articles',
    'campgrounds',
    // 'events',
    'newsreleases',
    'people',
    'places',
    'thingstodo',
    // 'webcams',
  ];

  const mappedUrls = dataArr.map(opt => `${BASE_START}${opt}${BASE_END}`);

  return axios
    .all(mappedUrls.map(endpoint => axios.get(endpoint)))
    .then(data => {
      const FULL = {};
      data.forEach((field, index) => {
        FULL[dataArr[index]] = field.data.data;
      });
      return FULL;
    })
    .catch(e => null);
};

const useFullParkData = parkId =>
  useQuery(['fullPark', parkId], () => getFullParkData(parkId), {
    refetchOnMount: false,
  });
export default useFullParkData;
