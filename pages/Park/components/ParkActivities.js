import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useFullParkData from '../../../api/nps/getFullParkData';
import {usePark} from '../park-context';

const ParkActivities = () => {
  const {data, setImgIndex} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);
  return (
    <View>
      <Text>P activities</Text>
    </View>
  );
};

export default ParkActivities;

const styles = StyleSheet.create({});
