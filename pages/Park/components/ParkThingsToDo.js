import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useFullParkData from '../../../api/nps/getFullParkData';
import {FONTS} from '../../../constants';
import {usePark} from '../park-context';

const ParkThingsToDo = () => {
  const {data, setImgIndex} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);

  if (!fullData) {
    return null;
  }

  const {thingstodo: TTD} = fullData;

  console.log('TTF', TTD);

  return (
    <View>
      <Text style={{...FONTS.h2, marginVertical: 5}}>Things To Do</Text>
      <FlatList
        style={{}}
        data={TTD}
        renderItem={item => {
          item.index === 0 && console.log('item', item);
          const opt = item.item;
          return (
            <View style={styles.optBox}>
              <Text style={{fontWeight: '700'}}>{opt.title}</Text>
              <Text style={{fontWeight: '300', marginVertical: 5}}>
                {opt.shortDescription}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ParkThingsToDo;

const styles = StyleSheet.create({
  optBox: {
    marginVertical: 5,
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
});
