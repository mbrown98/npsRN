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
import BROWSER from '../../../utils/browser';
import {usePark} from '../park-context';
import SectionHead from '../subComponents/SectionHead';

const ParkPeople = ({data}) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={({item: person}) => {
        return (
          <TouchableOpacity
            style={styles.imgBox}
            onPress={() => BROWSER.openBrowser(person.url)}>
            <Image source={{uri: person.images[0].url}} style={styles.img} />
            <Text style={styles.infoText}>{person.firstName}</Text>
            <Text style={styles.infoText}>{person.lastName}</Text>
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
  },
  img: {height: 100, width: 100, borderRadius: 50, marginVertical: 10},
  infoText: {fontWeight: '700', fontSize: 15, marginTop: 0},
});
