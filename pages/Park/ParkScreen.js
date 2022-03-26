import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

import useParkByID from '../../api/hooks/useParkByID';
import ParkMap from './components/ParkMap';
import {usePark} from './park-context';
import ParkWeather from './components/ParkWeather';

Entypo.loadFont();
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function ParkScreen({navigation}) {
  const {data} = usePark();

  const {images, fullName, name, addresses, description} = data;
  const {city, stateCode} = addresses[0];

  return (
    <>
      <ImageBackground
        source={{uri: images[0].url}}
        style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" color={colors.white} size={32} />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView
        style={{
          flex: 1,
          marginHorizontal: 5,
          marginBottom: 20,
        }}>
        <View style={{height: height * 0.5}} />
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{fullName}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" color={colors.white} size={24} />
            <Text style={styles.locationText}>
              {city}, {stateCode}
            </Text>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <View style={styles.heartWrapper}>
            <Entypo name="heart" color={colors.orange} size={32} />
          </View>

          <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
          <ParkMap />
          <ParkWeather />
          <View style={{height: 20}} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height,
    width: width,
    justifyContent: 'space-between',
    position: 'absolute',
  },
  descriptionWrapper: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
    zIndex: 30,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  descriptionTextWrapper: {marginTop: 30, marginHorizontal: 20},
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.darkGray,
  },
});
