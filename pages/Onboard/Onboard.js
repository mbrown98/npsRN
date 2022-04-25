import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';
import {IMAGES} from '../../assets/images';
import {useGlobal} from '../../context/global-context';
import {COLORS, SIZES} from '../../constants';
// import AppLoading from "expo-app-loading";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const {
  onboard: {zion, olympic, bryce, yosemite},
  screens: {game, map, news, visited, park},
} = IMAGES;

Entypo.loadFont();

export default function Onboard() {
  const {name, setOnboardComplete} = useGlobal();
  const slideData = [
    {
      img: visited,
      title: 'Welcome',
      sub: 'Parkport allows you to access the beauty of America in the palm of your hand. Find new parks, mark those you have visited, and favorite the ones you wish to learn more about.',
    },
    {
      img: map,
      title: 'Discover',
      sub: 'Use the map to travel around the country. Explore coast to coast, uncover hidden gems, and plan your next road trip.',
    },
    {
      img: game,
      title: 'Challenge',
      sub: 'How well do you know your parks? From moments in history to massive mountains, challenge yourself to set high scores.',
    },
    {
      img: news,
      title: 'Stay in the Know',
      sub: 'Follow news releases, alerts, and events for all your favorite parks. The National Park Service is the source of all data.',
    },
  ];
  return (
    <SafeAreaView style={styles.sa}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={styles.sv}>
        {slideData.map((sl, i) => {
          return (
            <View style={styles.slide} key={i}>
              <Image source={sl.img} style={styles.img} resizeMode="cover" />
              <View style={styles.textContain}>
                <Text style={styles.title}>{sl.title}</Text>
                <Text style={styles.text}>{sl.sub}</Text>
                {i === slideData.length - 1 && (
                  <TouchableOpacity onPress={() => setOnboardComplete(true)}>
                    <Entypo
                      name="chevron-right"
                      size={36}
                      color={COLORS.darkGreen}
                      style={{alignSelf: 'flex-end', marginVertical: 5}}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
  // }
}

const styles = StyleSheet.create({
  sa: {
    flex: 1,
    backgroundColor: 'white',
  },
  sv: {flex: 1},
  slide: {
    width: w,
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: SIZES.padding,
  },
  img: {
    alignSelf: 'center',
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.8,
  },
  textContain: {paddingHorizontal: 30},
  title: {
    // fontFamily: 'Montserrat_700Bold',
    marginTop: 60,
    fontSize: 32,
  },
  text: {
    color: '#767676',
    // fontFamily: 'Montserrat_400Regular',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
  },
  getStart: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkGreen,
    alignSelf: 'flex-end',
  },
});

const buttonWrapperStyle = {
  backgroundColor: 'transparent',
  flexDirection: 'row',
  position: 'absolute',
  bottom: 0,
  left: 0,
  flex: 1,
  paddingHorizontal: 30,
  paddingVertical: 20,
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
};
