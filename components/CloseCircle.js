import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../constants';

AntDesign.loadFont();

const CloseCircle = ({touchProps, circleProps}) => {
  return (
    <TouchableOpacity {...touchProps}>
      <AntDesign
        name="closecircle"
        color={COLORS.lightGray2}
        size={20}
        {...circleProps}
      />
    </TouchableOpacity>
  );
};

export default CloseCircle;
