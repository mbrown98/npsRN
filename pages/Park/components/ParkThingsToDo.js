import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import useFullParkData from '../../../api/nps/getFullParkData';
import {FONTS} from '../../../constants';
import {UTILS} from '../../../utils';
import {usePark} from '../park-context';
import SectionHead from '../subComponents/SectionHead';

Entypo.loadFont();

const ParkThingsToDo = () => {
  const navigation = useNavigation();
  const {data, setImgIndex, sections} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);

  const [sectionOpen, setSectionOpen] = useState(false);
  if (!fullData) {
    return null;
  }

  const {thingstodo: TTD} = fullData;

  if (!TTD.length) {
    return null;
  }

  console.log('SSS', sections);

  return (
    <>
      <SectionHead section="Things To Do" />
      {sections['Things To Do'] && (
        <FlatList
          style={{}}
          data={TTD}
          renderItem={item => {
            const thing = item.item;
            return (
              <TouchableOpacity
                style={styles.optBox}
                onPress={async () => {
                  await UTILS.browser.openBrowser(thing.url);
                }}>
                <Text style={{fontWeight: '700'}}>{thing.title}</Text>

                <Text style={{fontWeight: '300', marginVertical: 5}}>
                  {thing.shortDescription}
                </Text>
              </TouchableOpacity>
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
  optBox: {
    marginVertical: 5,
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
});
