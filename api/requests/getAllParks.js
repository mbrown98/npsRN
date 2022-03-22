import axios from 'axios';

export const getAllParks = async () => {
  return axios
    .get(
      'https://developer.nps.gov/api/v1/parks?limit=500&api_key=xVDrllRsZGSuU1sLpzu687U6R8bZG9NpU4W2wwSM',
    )
    .then(async res => {
      return res.data.data;
    })
    .catch(e => {
      return [];
    });
};
