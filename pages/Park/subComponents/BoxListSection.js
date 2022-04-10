import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, FONTS} from '../../../constants';

Entypo.loadFont();

const BoxListSection = ({title, data}) => {
  const [sectionOpen, setSectionOpen] = useState(false);
  return (
    <>
      <View style={styles.topRow}>
        <Text style={{...FONTS.h2, marginVertical: 5}}>{title}</Text>
        <TouchableOpacity onPress={() => setSectionOpen(!sectionOpen)}>
          <Entypo
            name={`chevron-thin-${sectionOpen ? 'up' : 'down'}`}
            size={16}
          />
        </TouchableOpacity>
      </View>
      {sectionOpen && (
        <FlatList
          style={{}}
          data={data}
          numColumns={3}
          renderItem={item => {
            return (
              <View style={styles.optBox}>
                <Text style={styles.optText}>{item.item.name}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
};

export default BoxListSection;

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optBox: {
    backgroundColor: COLORS.darkGreen,
    padding: 7,
    marginRight: 5,
    borderRadius: 5,
    width: '33%',
    overflow: 'hidden',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});
