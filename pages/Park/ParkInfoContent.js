import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useFullParkData from '../../api/nps/getFullParkData';
import {FONTS, SIZES} from '../../constants';
import ParkActivities from './components/ParkActivities';
import ParkAlerts from './components/ParkAlerts';
import ParkMap from './components/ParkMap';
import ParkThingsToDo from './components/ParkThingsToDo';
import ParkTopics from './components/ParkTopics';
import {usePark} from './park-context';

const ParkInfoContent = () => {
  const {data, setImgIndex} = usePark();

  if (!data) {
    return null;
  }

  const {description, images} = data;

  return (
    <View style={styles.infoWrapper}>
      <Text style={styles.descriptionText}>{description}</Text>
      <FlatList
        style={styles.imageScrollWrapper}
        horizontal={true}
        data={images}
        renderItem={item => {
          const uri = item.item.url;
          return (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => setImgIndex(item.index)}>
              <Image
                source={{uri}}
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.url}
        showsHorizontalScrollIndicator={false}
      />
      <ParkActivities />
      <ParkTopics />
      <ParkAlerts />
      <ParkThingsToDo />
      <ParkMap />
    </View>
  );
};

export default ParkInfoContent;

const styles = StyleSheet.create({
  infoWrapper: {
    padding: SIZES.padding,
  },
  descriptionText: {
    fontWeight: '600',
    lineHeight: 22,
    fontSize: 15,
  },
  imageScrollWrapper: {
    marginVertical: SIZES.padding,
  },
});
