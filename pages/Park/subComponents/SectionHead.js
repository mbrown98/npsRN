import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {FONTS} from '../../../constants';
import {usePark} from '../park-context';

Entypo.loadFont();

const SectionHead = ({section: title}) => {
  const {sections, setSections} = usePark();
  return (
    <TouchableOpacity
      style={styles.topRow}
      onPress={() => setSections({[title]: !sections[title]})}>
      <Text style={{...FONTS.h2, marginVertical: 5}}>{title}</Text>

      <Entypo
        name={`chevron-thin-${sections[title] ? 'up' : 'down'}`}
        size={16}
      />
    </TouchableOpacity>
  );
};

export default SectionHead;

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
