import axios from 'axios';

export const getAllParks = async () => {
  // move get all parks to api folder, and use react-query
  axios
    .get(
      'https://developer.nps.gov/api/v1/parks?limit=500&api_key=xVDrllRsZGSuU1sLpzu687U6R8bZG9NpU4W2wwSM',
    )
    .then(res => {
      // console.log(res.data);

      const data = res.data.data;

      console.log('data:', data);
    });
};
