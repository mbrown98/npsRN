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
import Spacer from '../../components/Spacer';
import {useAuth} from '../../context/auth-context';

Feather.loadFont();

const Home = ({navigation}) => {
  const {
    userData: {favorites, visited},
  } = useFirebase();
  const {user} = useAuth();
  const [parkData, setParkData] = useState(null);

  const {data: news} = useGroupParkData('newsreleases', [favorites], user);

  useEffect(() => {
    const asyncFetch = async () => {
      return await getFeaturedParks();
    };
    asyncFetch().then(res => {
      setParkData(res.featured);
    });
  }, []);

  const createInfoList = useCallback(() => {
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
  }, [news]);

  const infoListData = createInfoList();

  return (
    <SafeAreaView style={styles.contain}>
      <FlatList
        data={infoListData?.slice(0, 30)}
        style={{marginHorizontal: 12}}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <ParksSearchBar placeholder="Search Parks" />
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
            <Spacer h={20} />
            {/* <TouchableOpacity
              style={{height: 80, backgroundColor: 'grey', borderRadius: 10}}
            />
            <Spacer h={20} /> */}
            <Text style={styles.justForYouText}>Just For You</Text>
            <Spacer h={10} />
          </>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          if (!item.parkCode && item?.parkCodes.length) {
            item.parkCode = item?.parkCodes[0];
          }

          if (!item.title) {
            return null;
          }
          return <ImgInfoBox data={{...item, index}} />;
        }}
        ListFooterComponent={() => {
          if (!infoListData.length) {
            return (
              // make this reusable
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: '600'}}>
                  {favorites?.length
                    ? 'No News for your Favorite Parks'
                    : 'Favorite Parks to stay in the know'}
                </Text>
                <Spacer h={10} />
                <TouchableOpacity
                  onPress={() => navigation.navigate('FullMap')}>
                  <Text style={{color: COLORS.darkGreen}}>Explore Parks</Text>
                </TouchableOpacity>
              </View>
            );
          }
          return null;
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
    marginHorizontal: 5,
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
