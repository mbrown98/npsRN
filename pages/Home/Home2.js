import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {getFeaturedParks} from '../../api/firebase/parks';
import {IMAGES} from '../../assets/images';

import {FONTS, COLORS, icons, images, SIZES} from '../../constants';
import {useAuth} from '../../context/auth-context';
import FeaturedParkCard from './components/FeaturedParkCard';
import HomeHeader from './components/HomeHeader';
import ParksRemainingCard from './components/ParksRemainingCard';
import ParksSearchBar from './components/ParksSearchBar';

Feather.loadFont();

const Home2 = ({navigation}) => {
  const {user} = useAuth();
  const [parkData, setParkData] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      return await getFeaturedParks();
    };
    asyncFetch().then(res => {
      setParkData(res.featured);
    });
  }, []);

  function renderTrendingSection() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
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
    );
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}>
        <Text style={{flex: 1, ...FONTS.h2}}>Categories</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}]}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <HomeHeader />
            <ParksSearchBar />
            <ParksRemainingCard />
            {renderTrendingSection()}
            {/* {renderCategoryHeader()} */}
          </View>
        }
        renderItem={({item}) => {
          return (
            <View />
            // <CategoryCard
            //   containerStyle={{
            //     marginHorizontal: SIZES.padding,
            //   }}
            //   categoryItem={item}
            //   onPress={() => navigation.navigate('Park', {recipe: item})}
            // />
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 100}}></View>}
      />
    </SafeAreaView>
  );
};

export default Home2;

const styles = StyleSheet.create({});
