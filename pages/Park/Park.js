import React from 'react';
import {ParkProvider} from './park-context';
import ParkScreen from './ParkScreen';

export default function Park({
  navigation,
  route: {
    params: {code},
  },
}) {
  return (
    <ParkProvider code={code}>
      <ParkScreen />
    </ParkProvider>
  );
}
