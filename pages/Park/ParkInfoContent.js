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
import {useGlobal} from '../../context/global-context';
import {CONNECTION} from '../../utils/connection';
import DevSection from './components/DevSection';
import ParkDirections from './components/ParkDirections';
import ParkHoursAndFees from './components/ParkHoursAndFees';
import ParkPeople from './components/ParkPeople';
import ParkWeather from './components/ParkWeather';
import {usePark} from './park-context';
import BoxListSection from './subComponents/BoxListSection';
import ImgInfoBoxFlatList from './subComponents/ImgInfoBoxFlatList';
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
  const {connection} = useGlobal();

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
    addresses,
    directionsInfo,
    directionsUrl,
    entranceFees,
    entrancePasses,
    latLong,
    operatingHours,
  } = data;

  const address = addresses[0];

  return (
    <View style={styles.infoWrapper}>
      <Text style={styles.descriptionText}>{description}</Text>
      {CONNECTION.show(connection) && (
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
                    backgroundColor: COLORS.transparentGreen,
                  }}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.index}
          showsHorizontalScrollIndicator={false}
        />
      )}

      <FlatList
        data={[
          {
            section: 'Hours and Fees',
            content: (
              <ParkHoursAndFees
                data={[{operatingHours, entrancePasses, entranceFees}]}
              />
            ),
          },
          {
            section: 'Directions',
            content: (
              <ParkDirections
                data={[{directionsInfo, directionsUrl, latLong}]}
              />
            ),
          },
          {
            section: 'Weather',
            content: <ParkWeather data={weatherInfo} />,
          },
          {
            section: 'Things To Do',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.thingstodo.map(ttd => {
                  return {
                    ...ttd,
                    infoUrl: ttd?.url,
                    subText: ttd?.activityDescription,
                    img: ttd?.images[0]?.url,
                  };
                })}
              />
            ),
          },

          {
            section: 'Places',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.places.map(place => {
                  return {
                    ...place,
                    infoUrl: place.url,
                    subText: place?.listingDescription,
                    img: place?.images[0]?.url,
                  };
                })}
              />
            ),
          },
          {
            section: 'Campgrounds',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.campgrounds.map(camp => {
                  return {
                    ...camp,
                    infoUrl: camp?.url,
                    title: camp?.name,
                    subText: camp?.description,
                    img: camp?.images[0]?.url,
                  };
                })}
              />
            ),
          },

          // {
          //   section: 'Webcams',
          //   content: <DevSection data={fullData?.webcams} />,
          // },
          // {
          //   section: 'Events',
          //   // content: <DevSection data={fullData?.events} />,
          //   content: (
          //     <ImgInfoBoxFlatList
          //       data={fullData?.events.map(event => {
          //         console.log('event', event);
          //         return {
          //           ...event,

          //         };
          //       })}
          //     />
          //   ),
          // },
          {
            section: 'News Releases',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.newsreleases.map(nr => {
                  return {
                    ...nr,
                    infoUrl: nr?.url,
                    img: nr?.image?.url,
                  };
                })}
              />
            ),
          },
          {
            section: 'Alerts',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.alerts.map(alert => {
                  return {
                    ...alert,
                    infoUrl: alert?.url,
                    subText: alert?.description,
                  };
                })}
              />
            ),
          },
          {
            section: 'Articles',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.articles.map(article => {
                  return {
                    ...article,
                    infoUrl: article?.url,
                    subText: article?.listingDescription,
                  };
                })}
              />
            ),
          },

          {
            section: 'People',
            content: <ParkPeople data={fullData?.people} />,
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
