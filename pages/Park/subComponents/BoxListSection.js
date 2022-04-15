import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, FONTS} from '../../../constants';

Entypo.loadFont();

const BoxListSection = ({data}) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => {
        return (
          <View style={styles.optBox}>
            <Text style={styles.optText}>{item.name}</Text>
          </View>
        );
      }}
      keyExtractor={item => item.name}
      showsHorizontalScrollIndicator={false}
    />
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
    width: '50%',
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
