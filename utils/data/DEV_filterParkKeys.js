import {getAllParks} from '../../api/nps/getAllParks';

export const DEV_filterParkKeys = () => {
  const parksObj = {};
  getAllParks()
    .then(parks =>
      parks.forEach(park => {
        parksObj[park.parkCode] = {
          fullName: park.fullName,
          parkCode: park.parkCode,
          latitude: park.latitude,
          longitude: park.longitude,
          description: park.description,
          image: {
            url: park.images[0].url,
            credit: park.images[0].credit,
          },
        };
      }),
    )
    .then(res => console.log(parksObj));
};
