import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import useFullParkData from '../../../api/nps/getFullParkData';
import {FONTS} from '../../../constants';
import {usePark} from '../park-context';

Entypo.loadFont();

const ParkThingsToDo = () => {
  const {data, setImgIndex} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);

  const [sectionOpen, setSectionOpen] = useState(false);
  if (!fullData) {
    return null;
  }

  const {thingstodo: TTD} = fullData;

  if (!TTD.length) {
    return null;
  }

  return (
    <>
      <View style={styles.topRow}>
        <Text style={{...FONTS.h2, marginVertical: 5}}>Things To Do</Text>
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
          data={TTD}
          renderItem={item => {
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
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
};

export default ParkThingsToDo;

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optBox: {
    marginVertical: 5,
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
});
