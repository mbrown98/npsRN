import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {SIZES, COLORS, FONTS} from '../../../constants';
import useParkByID from '../../../api/hooks/useParkByID';
import {FIRESTORE} from '../../../api/firebase/firestore';
import {useAuth} from '../../../context/auth-context';
import {useFirebase} from '../../../context/firebase-content';
import ASSETS from '../../../assets';

Fontisto.loadFont();

const FeaturedParkCard = ({containerStyle, parkId, onPress}) => {
  const {user} = useAuth();
  const {
    userData: {favorites, visited},
  } = useFirebase();
  const {data, isLoading, isSuccess} = useParkByID(parkId);

  if (!data) {
    return null;
  }
  const {images, fullName, name, addresses, parkCode} = data;

  const {city, stateCode} = addresses[0];

  const {
    favorites: {FavSvg, NoFavSvg},
    visited: {VisitedSvg, NoVisitedSvg},
  } = ASSETS;

  return (
    <TouchableOpacity
      style={{...styles.contain, ...containerStyle}}
      onPress={onPress}>
      {/* Background Image */}
      <Image
        source={{uri: images[0].url}}
        resizeMode="cover"
        style={styles.bgImg}
      />

      {/* Category */}
      <View style={styles.parkCategoryWrapper}>
        <Text style={styles.parkCategoryText}>{parkCode.toUpperCase()}</Text>
      </View>

      {/* Card Info */}
      <BlurView style={styles.parkDetailsBlur} blurType="dark">
        <View style={styles.detailsWrapper}>
          <View style={styles.detailsTextWrapper}>
            <Text
              style={styles.detailsText}
              numberOfLines={2}
              ellipsizeMode="tail">
              {fullName}
            </Text>
            <Text
              style={styles.detailsSubText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {city}, {stateCode}
            </Text>
          </View>

          {/* make this reusable */}
          <View>
            <TouchableOpacity
              style={{marginBottom: 10}}
              onPress={async () => {
                FIRESTORE.toggleUserPark(user.uid, 'favorites', data.parkCode);
              }}>
              {favorites[data.parkCode] ? (
                <FavSvg height={30} width={30} />
              ) : (
                <NoFavSvg height={30} width={30} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                FIRESTORE.toggleUserPark(user.uid, 'visited', data.parkCode);
              }}>
              {visited[data.parkCode] ? (
                <VisitedSvg height={30} width={30} />
              ) : (
                <NoVisitedSvg height={30} width={30} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contain: {
    height: 275,
    width: 250,
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius,
  },
  bgImg: {
    width: 250,
    height: 275,
    borderRadius: SIZES.radius,
  },
  parkCategoryWrapper: {
    position: 'absolute',
    top: 20,
    left: 15,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 5,
    backgroundColor: COLORS.transparentGray,
    borderRadius: SIZES.radius,
  },
  parkCategoryText: {color: COLORS.white, ...FONTS.h4},
  parkDetailsBlur: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,

    borderRadius: SIZES.radius,
  },
  detailsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  detailsTextWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  detailsText: {
    color: COLORS.white,
    ...FONTS.h3,
    fontSize: 18,
  },
  detailsSubText: {
    color: COLORS.lightGray,
    ...FONTS.body5,
  },
});

export default FeaturedParkCard;
