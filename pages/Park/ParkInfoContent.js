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
import DevSection from './components/DevSection';
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

const DataKeys = [
  'id',
  'url',
  'fullName',
  'parkCode',
  'description',
  'latitude',
  'longitude',
  'latLong',
  'activities',
  'topics',
  'states',
  'contacts',
  'entranceFees',
  'entrancePasses',
  'fees',
  'directionsInfo',
  'directionsUrl',
  'operatingHours',
  'addresses',
  'images',
  'weatherInfo',
  'name',
  'designation',
];

const FDKeys = [
  'alerts',
  'articles',
  'campgrounds',
  'events',
  'newsreleases',
  'people',
  'places',
  'thingstodo',
  'webcams',
];

const ParkInfoContent = () => {
  const {data, setImgIndex, sections} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);

  if (!data) {
    return null;
  }

  const {
    description,
    images,
    weatherInfo,
    topics,
    activities,
    states,
    contacts,
    fees,
  } = data;

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
            content: <ParkThingsToDo data={fullData?.thingstodo} />,
          },
          {
            section: 'People',
            content: <ParkPeople data={fullData?.people} />,
          },
          {
            section: 'Alerts',
            content: <DevSection data={fullData?.alerts} />,
          },
          {
            section: 'Articles',
            content: <DevSection data={fullData?.articles} />,
          },
          {
            section: 'Campgrounds',
            content: <DevSection data={fullData?.campgrounds} />,
          },
          {
            section: 'Events',
            content: <DevSection data={fullData?.events} />,
          },
          {
            section: 'News Releases',
            content: <DevSection data={fullData?.newsreleases} />,
          },

          {
            section: 'Places',
            content: <DevSection data={fullData?.places} />,
          },
          {
            section: 'Webcams',
            content: <DevSection data={fullData?.webcams} />,
          },
          {
            section: 'Weather',
            content: <ParkWeather data={weatherInfo} />,
          },
          {
            section: 'Topics',
            content: <BoxListSection data={topics} />,
          },
          {
            section: 'Activities',
            content: <BoxListSection data={activities} />,
          },
          {
            section: 'States',
            content: (
              <BoxListSection
                data={states.split(',').map(opt => ({
                  name: opt,
                }))}
              />
            ),
          },
        ]}
        renderItem={({item}) => {
          const hasEntries = !!item.content.props?.data?.length;

          if (!hasEntries) {
            return null;
          }

          return (
            <>
              <SectionHead section={item.section} />
              {sections[item.section] && item.content}

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
