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
import currentPin from '../../assets/icons/pins/pin.png';
import ASSETS from '../../assets';
import {FIRESTORE} from '../../api/firebase/firestore';
import {useAuth} from '../../context/auth-context';
import VisitFavIcon from '../../components/VisitFavIcon';

const mapCoords = {
  latitude: '38.88927229',
  longitude: '-77.05017778',
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

Fontisto.loadFont();

const FullMap = ({navigation}) => {
  const {user} = useAuth();
  const {
    userData: {favorites, visited},
  } = useFirebase();

  const {
    favorites: {FavPng, FavSvg, NoFavSvg},
    visited: {VisitedPng, VisitedSvg, NoVisitedSvg},
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
      <View style={styles.legendOverlay}>
        <Text>Hi</Text>
      </View>
      {!!selectedPark && (
        <TouchableOpacity
          style={styles.selectedOverlay}
          onPress={() => navigation.navigate('Park', {code: selectedPark})}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text style={{...FONTS.h3}}>
              {parkCodes[selectedPark].fullName}
            </Text>
            <TouchableOpacity
              style={{paddingLeft: 5}}
              onPress={() => setSelectedPark(null)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontWeight: '400',
              fontSize: 13,
              lineHeight: 17,
              position: 'relative',
            }}>
            {parkCodes[selectedPark].description}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-around',
            }}>
            <VisitFavIcon park={selectedPark} list="favorites" size={50} />
            <VisitFavIcon park={selectedPark} list="visited" size={50} />
          </View>
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
  legendOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '90%',
    backgroundColor: 'rgba(231, 249, 239,.9)',
    paddingTop: 100,
    paddingHorizontal: 20,
    marginHorizontal: '2%',
    borderRadius: 20,
  },
});
