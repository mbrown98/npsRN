import axios from 'axios';
import {getAllParks} from '../api/requests/getAllParks';
import {ASYNC_STORE} from './storage';

export const downloadAllParkDataToStore = async () => {
  // move get all parks to api folder, and use react-query
  getAllParks()
    .then(async data => {
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