import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS, SIZES} from '../../constants';
import ParkMap from './components/ParkMap';
import {usePark} from './park-context';

const ParkInfoContent = () => {
  const {data} = usePark();
  if (!data) {
    return null;
  }

  const {description} = data;
  return (
    <View style={styles.infoWrapper}>
      <Text style={styles.descriptionText}>{description}</Text>
      <ParkMap />
    </View>
  );
};

export default ParkInfoContent;

const styles = StyleSheet.create({
  infoWrapper: {
    padding: SIZES.padding,
  },
  descriptionText: {
    fontWeight: '600',
    lineHeight: 22,
    fontSize: 15,
  },
});
