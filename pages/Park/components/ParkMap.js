import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {usePark} from '../park-context';

export default function ParkMap() {
  const {data} = usePark();

  if (!data) {
    return null;
  }

  const {latitude, longitude} = data;
  console.log({latitude, longitude});

  const mapCoords = {
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View>
      <MapView initialRegion={mapCoords} style={styles.map}>
        <Marker coordinate={mapCoords} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 400,
    borderRadius: 5,
    marginVertical: 20,
  },
});
