import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';
import {usePark} from '../park-context';

export default function ParkWeather() {
  const {data} = usePark();

  if (!data) {
    return null;
  }

  const {weatherInfo} = data;
  return (
    <View style={styles.descriptionTextWrapper}>
      <Text style={styles.descriptionTitle}>Weather</Text>
      <Text style={styles.descriptionText}>{weatherInfo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionTextWrapper: {marginTop: 20, marginHorizontal: 20},
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
