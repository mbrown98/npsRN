import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';
import colors from '../../assets/colors/colors';
import {IMAGES} from '../../assets/images';
import {useGlobal} from '../../context/global-context';
// import AppLoading from "expo-app-loading";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

Entypo.loadFont();

export default function Onboard() {
  const {zion, olympic, bryce, yosemite} = IMAGES.onboard;
  const {name} = useGlobal();
  return (
    <Swiper
      buttonWrapperStyle={buttonWrapperStyle}
      style={styles.wrapper}
      showsButtons={true}
      paginationStyle={{
        marginRight: w * 0.7,
        marginBottom: h * 0.02,
      }}
      activeDotColor={colors.orange}
      dotColor="#e6f0e6"
      nextButton={
        <View style={styles.nextButtonContain}>
          <Entypo name="chevron-right" size={18} color={colors.white} />
        </View>
      }
      prevButton={
        <View style={styles.prevButtonContain}>
          <Entypo name="chevron-left" size={18} color={colors.white} />
        </View>
      }>
      <View style={styles.slide}>
        <Image source={bryce} style={styles.img} />
        <Text style={styles.title}>Travel</Text>
        <Text style={styles.text}>
          {name} Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={zion} style={styles.img} />
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
      </View>

      <View style={styles.slide}>
        <Image source={olympic} style={styles.img} />
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={yosemite} style={styles.img} />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Text>
      </View>
    </Swiper>
  );
  // }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: 'center',
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.9,
  },
  title: {
    // fontFamily: 'Montserrat_700Bold',
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: '#767676',
    // fontFamily: 'Montserrat_400Regular',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
  nextButtonContain: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: colors.orange,
  },
  prevButtonContain: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: colors.orange,
    marginHorizontal: 20,
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
