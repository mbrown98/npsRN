import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useFullParkData from '../../../api/nps/getFullParkData';
import {usePark} from '../park-context';

const ParkTopics = () => {
  const {data, setImgIndex} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);
  return (
    <View>
      <Text>P Topics</Text>
    </View>
  );
};

export default ParkTopics;

const styles = StyleSheet.create({});
