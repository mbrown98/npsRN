import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFullParkData from '../../../api/nps/getFullParkData';
import {COLORS, FONTS} from '../../../constants';
import {usePark} from '../park-context';

const ParkTopics = () => {
  const {data, setImgIndex} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);

  if (!fullData) {
    return null;
  }

  const {topics} = fullData;

  return <View></View>;
};

export default ParkTopics;

const styles = StyleSheet.create({});
