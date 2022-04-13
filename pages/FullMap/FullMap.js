import React, {useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, Overlay} from 'react-native-maps';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS, FONTS, parkCodes} from '../../constants';
import {useFirebase} from '../../context/firebase-content';
import plusPin from '../../assets/icons/pins/plus.png';
import lovePin from '../../assets/icons/pins/love.png';
import verifiedPin from '../../assets/icons/pins/verified.png';
import currentPin from '../../assets/icons/pins/pin.png';
import ASSETS from '../../assets';

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

  const {
    favorites: {FavPng},
    visited: {VisitedPng},
    map: {BinoSvg},
  } = ASSETS;
  const [selectedPark, setSelectedPark] = useState('');

  const determinePin = code => {
    if (code === selectedPark) {
      return <Image source={currentPin} style={{height: 40, width: 40}} />;
    }
    if (visited[code]) {
      return <Image source={VisitedPng} style={{height: 40, width: 40}} />;
    }
    if (favorites[code]) {
      return <Image source={FavPng} style={{height: 40, width: 40}} />;
    }
    return <BinoSvg height={20} width={20} />;
  };
  return (
    <>
      <MapView
        initialRegion={mapCoords}
        userInterfaceStyle={'dark'}
        style={styles.map}>
        {/* <TouchableOpacity
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
      /> */}
        {Object.values(parkCodes).map((park, index) => {
          const {latitude, longitude, fullName, parkCode} = park;
          return (
            <MapView.Marker
              key={index}
              coordinate={{latitude, longitude}}
              // title={fullName}
              onPress={() => setSelectedPark(parkCode)}>
              {determinePin(parkCode)}
            </MapView.Marker>
          );
        })}
      </MapView>
      {!!selectedPark && (
        <TouchableOpacity
          style={styles.selectedOverlay}
          onPress={() => navigation.navigate('Park', {code: selectedPark})}>
          <Text style={{...FONTS.h3, marginBottom: 5}}>
            {parkCodes[selectedPark].fullName}
          </Text>

          <Text
            style={{
              fontWeight: '400',
              fontSize: 13,
              lineHeight: 17,
              position: 'relative',
            }}>
            {parkCodes[selectedPark].description}
          </Text>
        </TouchableOpacity>
      )}
    </>
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
    padding: 20,
    borderRadius: 10,
  },
});
