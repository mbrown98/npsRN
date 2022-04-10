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

  const determinePin = code => {
    if (code === selectedPark) {
      return currentPin;
    }
    if (visited[code]) {
      return verifiedPin;
    }
    if (favorites[code]) {
      return lovePin;
    }
    return plusPin;
  };
  return (
    <MapView initialRegion={mapCoords} style={styles.map}>
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
            <Image
              source={determinePin(parkCode)}
              style={{height: 40, width: 40}}
            />
          </MapView.Marker>
        );
      })}
      {selectedPark ? (
        <View style={styles.selectedOverlay}>
          <Text style={{...FONTS.h3, marginBottom: 5}}>
            {parkCodes[selectedPark].fullName}
          </Text>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={{fontWeight: '400', fontSize: 13, lineHeight: 17}}>
              {parkCodes[selectedPark].description}
            </Text>
          </View>
          <Button
            title="Explore"
            style={{color: 'blue'}}
            onPress={() => navigation.navigate('Park', {code: selectedPark})}
          />
        </View>
      ) : null}
    </MapView>
  );
};

export default FullMap;

const styles = StyleSheet.create({
  map: {
    position: 'relative',
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
    zIndex: 100,
    minHeight: 30,
  },
});
