import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useFullParkData from '../../../api/nps/getFullParkData';
import {FONTS} from '../../../constants';
import {usePark} from '../park-context';
import SectionHead from '../subComponents/SectionHead';

const ParkPeople = () => {
  const navigation = useNavigation();
  const {data, setImgIndex, sections} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);

  if (!fullData || !fullData.people) {
    return null;
  }

  const {people} = fullData;

  return (
    <FlatList
      style={{}}
      data={people}
      horizontal={true}
      renderItem={item => {
        const person = item.item;
        return (
          <TouchableOpacity
            style={styles.imgBox}
            onPress={() => navigation.navigate('HistoricPerson', {person})}>
            <Image
              source={{uri: person.images[0].url}}
              style={{height: 100, width: 100, borderRadius: 50}}
            />
            <Text style={{fontWeight: '700', fontSize: 15, marginTop: 5}}>
              {person.firstName}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ParkPeople;

const styles = StyleSheet.create({
  imgBox: {
    marginRight: 20,
    alignItems: 'center',
    marginVertical: 5,
  },
});
