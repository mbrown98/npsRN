import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useFullParkData from '../../../api/nps/getFullParkData';
import {usePark} from '../park-context';

const ParkThingsToDo = () => {
  const {data, setImgIndex} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);
  return (
    <View>
      <Text>P TTD</Text>
    </View>
  );
};

export default ParkThingsToDo;

const styles = StyleSheet.create({});
