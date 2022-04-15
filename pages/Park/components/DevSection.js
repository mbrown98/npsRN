import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DevSection = ({data}) => {
  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default DevSection;

const styles = StyleSheet.create({});
