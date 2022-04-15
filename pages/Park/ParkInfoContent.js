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
import {COLORS, FONTS, SIZES} from '../../constants';
import ParkActivities from './components/ParkActivities';
import ParkAlerts from './components/ParkAlerts';
import ParkMap from './components/ParkMap';
import ParkPeople from './components/ParkPeople';
import ParkThingsToDo from './components/ParkThingsToDo';
import ParkTopics from './components/ParkTopics';
import ParkWeather from './components/ParkWeather';
import {usePark} from './park-context';
import BoxListSection from './subComponents/BoxListSection';
import SectionHead from './subComponents/SectionHead';

const ParkInfoContent = () => {
  const {data, setImgIndex, sections} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);

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

      <FlatList
        data={[
          {
            section: 'Things To Do',
            content: fullData && <ParkThingsToDo data={fullData.thingstodo} />,
          },
          {
            section: 'People',
            content: fullData && <ParkPeople data={fullData.people} />,
          },
          {
            section: 'Weather',
            content: data && <ParkWeather data={data.weatherInfo} />,
            type: 'string',
          },
        ]}
        renderItem={({item}) => {
          if (!item.content) {
            return null;
          }

          const hasEntries = !!item.content.props?.data.length;

          return (
            <>
              <SectionHead section={item.section} />
              {sections[item.section] && hasEntries && item.content}
              {sections[item.section] && !hasEntries && (
                <View>
                  <Text style={styles.noEntries}>None Found for this Park</Text>
                </View>
              )}
              <View style={{height: 10}} />
            </>
          );
        }}
        keyExtractor={item => item.section}
        showsHorizontalScrollIndicator={false}
      />
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
  noEntries: {
    color: COLORS.lightGray2,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 10,
  },
});
