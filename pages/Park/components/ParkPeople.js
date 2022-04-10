import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import useFullParkData from '../../../api/nps/getFullParkData';
import {FONTS} from '../../../constants';
import {usePark} from '../park-context';

const ParkPeople = () => {
  const {data, setImgIndex} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);

  if (!fullData.people) {
    return null;
  }

  const {people} = fullData;

  return (
    <>
      <Text style={{...FONTS.h2, marginVertical: 5}}>People</Text>
      <FlatList
        style={{}}
        data={people}
        horizontal={true}
        renderItem={item => {
          const per = item.item;
          return (
            <View style={styles.imgBox}>
              <Image
                source={{uri: per.images[0].url}}
                style={{height: 100, width: 100, borderRadius: 50}}
              />
              <Text style={{fontWeight: '700', fontSize: 15, marginTop: 5}}>
                {per.firstName}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </>
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
