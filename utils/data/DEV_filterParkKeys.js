import {getAllParks} from '../../api/requests/getAllParks';

export const DEV_filterParkKeys = () => {
  getAllParks()
    .then(parks =>
      parks.map(park => ({
        fullName: park.fullName,
        parkCode: park.parkCode,
        latitude: park.latitude,
        longitude: park.longitude,
        // description: park.description,
      })),
    )
    .then(parksData => console.log(parksData));
};
