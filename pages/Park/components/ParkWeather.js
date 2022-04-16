import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function ParkWeather({data}) {
  return <Text style={styles.descriptionText}>{data}</Text>;
}

const styles = StyleSheet.create({
  descriptionText: {
    marginTop: 5,
    fontWeight: '600',
    lineHeight: 22,
    fontSize: 15,
  },
});
