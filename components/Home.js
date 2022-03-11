import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import learnMoreData from '../assets/data/learnMoreData';
import discoverData from '../assets/data/discoverData';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
});
