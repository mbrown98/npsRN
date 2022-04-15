import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {FONTS} from '../../../constants';
import {usePark} from '../park-context';

Entypo.loadFont();

const SectionHead = ({section: title}) => {
  const {sections, setSections} = usePark();
  return (
    <View style={styles.topRow}>
      <Text style={{...FONTS.h2, marginVertical: 5}}>{title}</Text>
      <TouchableOpacity
        onPress={() => setSections({...sections, [title]: !sections[title]})}>
        <Entypo
          name={`chevron-thin-${sections[title] ? 'up' : 'down'}`}
          size={16}
        />
      </TouchableOpacity>
    </View>
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
