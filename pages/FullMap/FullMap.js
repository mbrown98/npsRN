import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, Overlay} from 'react-native-maps';
import {parkCodes} from '../../constants';

const mapCoords = {
  latitude: '38.88927229',
  longitude: '-77.05017778',
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

const FullMap = ({navigation}) => {
  return (
    <MapView initialRegion={mapCoords} style={styles.map}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: 'absolute',
          height: 20,
          width: 20,
          backgroundColor: 'red',
          top: 50,
          left: 20,
          zIndex: 300,
        }}
      />
      {parkCodes.map((park, index) => {
        const {latitude, longitude, fullName} = park;
        return (
          <Marker
            key={index}
            coordinate={{latitude, longitude}}
            title={fullName}
            description={park.description}
          />
        );
      })}
    </MapView>
  );
};

export default FullMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
