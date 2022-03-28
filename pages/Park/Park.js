import React from 'react';
import {ParkProvider} from './park-context';
import ParkScreen from './ParkScreen';
import ParkScreen2 from './ParkScreen2';

export default function Park({
  navigation,
  route: {
    params: {code},
  },
}) {
  return (
    <ParkProvider code={code}>
      <ParkScreen2 />
    </ParkProvider>
  );
}
