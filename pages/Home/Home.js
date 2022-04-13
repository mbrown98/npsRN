import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  Linking,
  Switch,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Pie from 'react-native-pie';
import {getFeaturedParks} from '../../api/firebase/parks';
import {IMAGES} from '../../assets/images';

import {FONTS, COLORS, icons, images, SIZES, parkCodes} from '../../constants';
import {useAuth} from '../../context/auth-context';
import FeaturedParkCard from './components/FeaturedParkCard';
import HomeHeader from './components/HomeHeader';
import ParksRemainingCard from './components/ParksRemainingCard';
import ParksSearchBar from './components/ParksSearchBar';
import useGroupParkData from '../../api/nps/getGroupParkData';
import {BlurView} from '@react-native-community/blur';
import {UTILS} from '../../utils';

Feather.loadFont();

const Home = ({navigation}) => {
  const [parkData, setParkData] = useState(null);

  const [infoList, setInfoList] = useState('News');

  const {data: alerts} = useGroupParkData('alerts', []);
  const {data: news} = useGroupParkData('newsreleases', []);
  const {data: events} = useGroupParkData('events', []);

  useEffect(() => {
    const asyncFetch = async () => {
      return await getFeaturedParks();
    };
    asyncFetch().then(res => {
      setParkData(res.featured);
    });
  }, []);

  const createInfoList = useCallback(() => {
    if (infoList === 'News') {
      if (!news) {
        return [];
      }
      return news.map(opt => ({
        title: opt.title,
        parkCodes: opt.relatedParks.map(p => p.parkCode),
        img: opt.image.url || '',
        infoUrl: opt.url,
        date: '',
      }));
    }
    if (infoList === 'Alerts') {
      return alerts.map(opt => ({
        title: opt.title,
        parkCodes: [opt.parkCode],
        img: '',
        infoUrl: opt.url,
        date: opt.lastIndexedDate,
      }));
    }
    if (infoList === 'Events') {
      return events.map(opt => ({
        title: opt.title,
        parkCode: opt.sitecode,
        img: '',
        infoUrl: opt.infourl,
        date: opt.date,
      }));
    }
  }, [infoList, alerts, events, news]);

  const infoListData = createInfoList();

  return (
    <SafeAreaView style={styles.contain}>
      <ScrollView>
        <HomeHeader />
        <ParksSearchBar />

        <View style={{marginTop: 10}}>
          <Text
            style={{
              marginHorizontal: SIZES.padding,
              ...FONTS.h2,
              color: COLORS.darkGreen,
            }}>
            Featured Parks
          </Text>

          {parkData && parkData.length && (
            <FlatList
              data={parkData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => `${item}`}
              renderItem={({item, index}) => {
                return (
                  <FeaturedParkCard
                    containerStyle={{
                      marginLeft: index == 0 ? SIZES.padding : 0,
                    }}
                    parkId={item}
                    onPress={() => navigation.navigate('Park', {code: item})}
                  />
                );
              }}
            />
          )}
        </View>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
            color: COLORS.darkGreen,
            marginVertical: 10,
            marginTop: 20,
          }}>
          Just For You
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 10,
            backgroundColor: COLORS.lightGreen,
            paddingVertical: 5,
            borderRadius: 5,
            marginHorizontal: SIZES.padding,
          }}>
          {['News', 'Alerts', 'Events'].map(opt => {
            const active = opt === infoList;
            return (
              <TouchableOpacity
                onPress={() => setInfoList(opt)}
                style={[
                  {paddingVertical: 5, paddingHorizontal: 20, borderRadius: 5},
                  active && {
                    backgroundColor: COLORS.darkGreen,
                  },
                ]}>
                <Text
                  style={{
                    fontWeight: '800',
                    color: active ? 'white' : COLORS.darkGreen,
                  }}>
                  {opt}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{margin: SIZES.padding}}>
          {/* <Text>News</Text> */}
          <FlatList
            data={infoListData}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              const {title, img, infoUrl} = item;
              if (!title) {
                return null;
              }
              return (
                <TouchableOpacity
                  onPress={() => UTILS.browser.openBrowser(infoUrl)}
                  style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 6, paddingRight: 10}}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={{fontWeight: '800'}}>
                      {item.title}
                    </Text>
                  </View>
                  {!!img && (
                    <View style={{flex: 2, maxHeight: 90}}>
                      <Image
                        source={{uri: img}}
                        style={{
                          height: '100%',
                          width: '100%',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
