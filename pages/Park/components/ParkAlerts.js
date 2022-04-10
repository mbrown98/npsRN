import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useFullParkData from '../../../api/nps/getFullParkData';
import {usePark} from '../park-context';

const ParkAlerts = () => {
  const {data, setImgIndex} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);
  return (
    <View>
      <Text>P Alerts</Text>
    </View>
  );
};

export default ParkAlerts;

const styles = StyleSheet.create({});
