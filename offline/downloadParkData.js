import axios from 'axios';
import {ASYNC_STORE} from './storage';

export const getAllParks = async () => {
  // move get all parks to api folder, and use react-query
  axios
    .get(
      'https://developer.nps.gov/api/v1/parks?limit=500&api_key=xVDrllRsZGSuU1sLpzu687U6R8bZG9NpU4W2wwSM',
    )
    .then(async res => {
      // console.log(res.data);

      const data = res.data.data;

      const PROMISES = [];
      data.forEach(park => {
        PROMISES.push(ASYNC_STORE.store(park.parkCode, park));
      });

      await Promise.all(PROMISES);
    })
    .catch(e => {
      console.log('ee', e);
    });
};
