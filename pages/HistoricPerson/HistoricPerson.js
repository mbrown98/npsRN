import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HistoricPerson = ({
  navigation,
  route: {
    params: {person},
  },
}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Hi</Text>
    </View>
  );
};

export default HistoricPerson;

const styles = StyleSheet.create({});
