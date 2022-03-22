import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import profile from '../../assets/images/person.png';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import activitiesData from '../../assets/data/activitiesData';
import learnMoreData from '../../assets/data/learnMoreData';
import parkCodes from '../../assets/data/parkCodes';
import colors from '../../assets/colors/colors';
import ParkPreviewCard from './components/ParkPreviewCard';
import {useGlobal} from '../../context/global-context';
import {useAuth} from '../../context/auth-context';
import {getFeaturedParks} from '../../api/firebase/parks';

Feather.loadFont();
Entypo.loadFont();

export default function Home({navigation}) {
  const {user} = useAuth();
  const {name, onboardComplete} = useGlobal();

  const [parkData, setParkData] = useState(null);
  const [selectedCat, setSelectedCat] = useState('featured');
  useEffect(() => {
    const asyncFetch = async () => {
      return await getFeaturedParks();
    };
    asyncFetch().then(res => {
      setParkData(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="search"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={{uri: user.photoURL}} style={styles.profileImage} />
          </View>
        </SafeAreaView>
        {/* Discover */}
        {parkData && (
          <>
            <View style={styles.discoverWrapper}>
              <Text style={styles.discoverTitle}>Discover</Text>
              <View style={styles.discoverCategoriesWrapper}>
                {Object.keys(parkData)
                  .reverse()
                  .map(opt => (
                    <Text
                      onPress={() => setSelectedCat(opt)}
                      key={opt}
                      style={[
                        styles.discoverCategoriesText,
                        opt.toLowerCase() === selectedCat && {
                          color: colors.orange,
                        },
                      ]}>
                      {opt.toUpperCase()}
                    </Text>
                  ))}
              </View>

              <View style={styles.discoverItemsWrapper}>
                <FlatList
                  data={parkData[selectedCat]}
                  renderItem={item => {
                    return <ParkPreviewCard item={item} />;
                  }}
                  keyExtractor={item => item}
                  horizontal
                  showScroll={false}
                />
              </View>
            </View>
          </>
        )}

        {/* Activities */}
        {/* <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities </Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={item => item.id}
              horizontal
              showScroll={false}
            />
          </View>
        </View> */}

        {/* Learn More */}
        {/* <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={item => item.id}
              horizontal
              showScroll={false}
            />
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {},
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    // marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },

  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoriesText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemImage: {borderRadius: 20},
  learnMoreItemText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

// const renderActivityItem = ({item}) => (
//   <View
//     style={[
//       styles.activityItemWrapper,
//       {marginLeft: item.id === 'activities-1' ? 20 : 0},
//     ]}>
//     <Image source={item.image} style={styles.activityItemImage} />
//     <Text style={styles.activityItemText}>{item.title}</Text>
//   </View>
// );

// const renderLearnMoreItem = ({item}) => (
//   <ImageBackground
//     source={item.image}
//     style={[
//       styles.learnMoreItem,
//       {marginLeft: item.id === 'learnMore-1' ? 20 : 0},
//     ]}
//     imageStyle={styles.learnMoreItemImage}>
//     <Text style={styles.learnMoreItemText}>{item.title}</Text>
//   </ImageBackground>
// );
