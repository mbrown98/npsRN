import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Spacer = ({h, w, flex}) => {
  return (
    <View
      style={[
        styles.default,
        h && {height: h},
        w && {width: w},
        flex && {flex},
      ]}
    />
  );
};

export default Spacer;

const styles = StyleSheet.create({height: 0, width: 0});
