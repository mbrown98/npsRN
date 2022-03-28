import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {SIZES, COLORS, FONTS} from '../../../constants';
import useParkByID from '../../../api/hooks/useParkByID';

Fontisto.loadFont();

const FeaturedParkCard = ({containerStyle, parkId, onPress}) => {
  console.log('FP', parkId);
  const {data, isLoading, isSuccess} = useParkByID(parkId);

  if (!data) {
    return null;
  }
  const {images, fullName, name, addresses, parkCode} = data;

  const {city, stateCode} = addresses[0];

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
            <Text style={styles.detailsText}>{fullName}</Text>
            {/* <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={styles.favoritesIcon}
        /> */}
            <Fontisto name="bookmark" size={20} color="white" />
          </View>

          <Text style={styles.detailsSubText}>
            {city}, {stateCode}
          </Text>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contain: {
    height: 350,
    width: 250,
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius,
  },
  bgImg: {
    width: 250,
    height: 350,
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
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
  detailsWrapper: {
    flex: 1,
  },
  detailsTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsText: {
    width: '70%',
    color: COLORS.white,
    ...FONTS.h3,
    fontSize: 18,
  },
  detailsSubText: {
    color: COLORS.lightGray,
    ...FONTS.body4,
  },
});

export default FeaturedParkCard;
