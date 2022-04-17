import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {getFeaturedParks} from '../../api/firebase/parks';
import {FONTS, COLORS, SIZES} from '../../constants';
import FeaturedParkCard from './components/FeaturedParkCard';
import HomeHeader from './components/HomeHeader';
import ParksSearchBar from './components/ParksSearchBar';
import useGroupParkData from '../../api/nps/getGroupParkData';
import {useFirebase} from '../../context/firebase-content';
import ImgInfoBox from '../../components/ImgInfoBox';

Feather.loadFont();

const Home = ({navigation}) => {
  const {
    userData: {favorites, visited},
  } = useFirebase();
  const [parkData, setParkData] = useState(null);

  const [infoList, setInfoList] = useState('News');

  const {data: alerts} = useGroupParkData('alerts', [favorites]);
  const {data: news} = useGroupParkData('newsreleases', [favorites]);
  const {data: events} = useGroupParkData('events', [favorites]);

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
      <FlatList
        data={infoListData}
        style={{marginHorizontal: 12}}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />

            <ParksSearchBar />
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.darkGreen,
                }}>
                Featured Parks
              </Text>

              {parkData?.length && (
                <FlatList
                  data={parkData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => `${item}`}
                  renderItem={({item, index}) => {
                    return (
                      <FeaturedParkCard
                        parkId={item}
                        onPress={() =>
                          navigation.navigate('Park', {code: item})
                        }
                      />
                    );
                  }}
                />
              )}
            </View>
            <Text style={styles.justForYouText}>Just For You</Text>
            <View style={styles.newsToggle}>
              {['News', 'Alerts', 'Events'].map(opt => {
                const active = opt === infoList;
                return (
                  <TouchableOpacity
                    onPress={() => setInfoList(opt)}
                    key={opt}
                    style={[
                      styles.newsToggleOpt,
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
          </>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          if (!item.title) {
            return null;
          }
          return <ImgInfoBox data={{...item, index}} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  justForYouText: {
    ...FONTS.h2,
    color: COLORS.darkGreen,
    marginVertical: 10,
    marginTop: 20,
  },
  newsToggle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: COLORS.lightGreen,
    paddingVertical: 5,
    borderRadius: 5,
  },
  newsToggleOpt: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
