import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, Overlay} from 'react-native-maps';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS, parkCodes} from '../../constants';
import {useFirebase} from '../../context/firebase-content';

const mapCoords = {
  latitude: '38.88927229',
  longitude: '-77.05017778',
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

Fontisto.loadFont();

const FullMap = ({navigation}) => {
  const {
    userData: {favorites, visited},
  } = useFirebase();
  const [selectedPark, setSelectedPark] = useState('');

  const determineMarker = code => {
    if (visited[code]) {
      return (
        <Fontisto
          name="passport"
          size={50}
          style={{marginRight: 20}}
          color={COLORS.darkGreen}
        />
      );
    }
    if (favorites[code]) {
      return (
        <Fontisto
          name="heart"
          size={50}
          style={{marginRight: 20}}
          color="red"
        />
      );
    }
    return null;
  };
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
          <MapView.Marker
            key={index}
            coordinate={{latitude, longitude}}
            onPress={() => setSelectedPark(park.parkCode)}>
            {determineMarker(park.parkCode)}
          </MapView.Marker>
        );
      })}
      {!!selectedPark && (
        <TouchableOpacity
          style={styles.selectedOverlay}
          onPress={() => {
            console.log('pressed');
            navigation.navigate('Park', {code: selectedPark});
          }}>
          <Text>{selectedPark}</Text>
        </TouchableOpacity>
      )}
    </MapView>
  );
};

export default FullMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  baseMarker: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedOverlay: {
    position: 'absolute',
    bottom: 30,
    left: 15,
    right: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    color: 'black',
    zIndex: 2000,
  },
});
