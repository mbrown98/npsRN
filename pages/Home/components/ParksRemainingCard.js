import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../../../assets/images';
import {COLORS, FONTS, SIZES} from '../../../constants';

const ParksRemainingCard = () => {
  return (
    <View style={styles.contain}>
      {/* Image */}
      <View style={styles.imgContain}>
        <Image source={IMAGES.login.tallTrees} style={styles.img} />
      </View>
      {/* Text */}
      <View style={styles.textWrapper}>
        <Text style={styles.infoText}>
          You have 12 parks that you haven't tried yet
        </Text>

        <TouchableOpacity
          style={styles.exploreMoreButton}
          onPress={() => console.log('See Recipes')}>
          <Text style={styles.exploreMoreText}>See Recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ParksRemainingCard;

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
  },
  imgContain: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {width: 80, height: 80},
  textWrapper: {
    flex: 1,
    paddingVertical: SIZES.radius,
  },
  infoText: {
    width: '70%',
    ...FONTS.body4,
  },
  exploreMoreButton: {
    marginTop: 10,
  },
  exploreMoreText: {
    color: COLORS.darkGreen,
    textDecorationLine: 'underline',
    ...FONTS.h4,
  },
});
