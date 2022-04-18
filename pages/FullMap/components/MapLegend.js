import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Pie from 'react-native-pie';
import {COLORS, FONTS, parkCodes} from '../../../constants';
import {useFirebase} from '../../../context/firebase-content';

const MapLegend = () => {
  const {
    userData: {favorites, visited},
  } = useFirebase();

  const visitPer = Math.round(
    (Object.keys(visited).length / Object.keys(parkCodes).length) * 100,
  );
  return (
    <View style={styles.legendOverlay}>
      <SafeAreaView />
      <Text style={{...FONTS.h1, marginBottom: 10}}>Legend</Text>

      <Pie
        radius={150}
        sections={[
          {
            percentage: visitPer,
            color: COLORS.darkGreen,
          },
        ]}
        backgroundColor={COLORS.transparentGreen}
      />
      <Text>You have visited {visitPer}% of the National Parks</Text>
    </View>
  );
};

export default MapLegend;

const styles = StyleSheet.create({
  legendOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '90%',
    backgroundColor: 'rgba(231, 249, 239,.9)',
    paddingHorizontal: 20,
    marginHorizontal: '2%',
    borderRadius: 20,
  },
  gauge: {
    position: 'absolute',
    width: 150,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    color: '#000',
    fontSize: 24,
  },
});
