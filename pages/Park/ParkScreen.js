import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../assets/images';

import {SIZES, FONTS, icons, COLORS} from '../../constants';
import ParkHeadInfo from './components/ParkHeadInfo';
import {usePark} from './park-context';
import ParkMap from './components/ParkMap';
import {FIRESTORE} from '../../api/firebase/firestore';
import {useAuth} from '../../context/auth-context';
import {useFirebase} from '../../context/firebase-content';
import ParkInfoContent from './ParkInfoContent';
import VisitFavIcon from '../../components/VisitFavIcon';
import FastImage from 'react-native-fast-image';

const HEADER_HEIGHT = 400;
Feather.loadFont();
Fontisto.loadFont();
Ionicons.loadFont();

const ParkScreen = ({route}) => {
  const navigation = useNavigation();

  const {data, imgIndex} = usePark();
  const scrollY = useRef(new Animated.Value(0)).current;

  if (!data) {
    return (
      <View>
        <Text>No Data</Text>
      </View>
    );
  }

  const {images, fullName, name, addresses, description, parkCode} = data;
  const {city, stateCode} = addresses[0];

  const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

  function renderParkCardHeader() {
    return (
      <View style={styles.parkCardHeader}>
        <AnimatedFastImage
          source={{uri: images[imgIndex].url}}
          resizeMode={FastImage.resizeMode.cover}
          style={{
            ...styles.animatedHeaderImg,
            backgroundColor: COLORS.transparentGreen,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />

        {/* Park Info card */}
        <Animated.View
          style={{
            ...styles.animatedParkInfoCard,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <ParkHeadInfo />
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={styles.pageContain}>
      <Animated.FlatList
        data={[{id: 1}, {id: 2}]}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderParkCardHeader()}
            <ParkInfoContent />
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => <View />}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />

      {/* Header Bar */}
      <View style={styles.headerBarContain}>
        {/* Screen Overlay */}
        <Animated.View
          style={{
            ...styles.animatedScreenOverlay,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        />

        {/* Header Bar Title */}
        <Animated.View
          style={{
            ...styles.animatedHeaderBarTitle,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Text
            style={{color: COLORS.lightGray2, ...FONTS.body4, maxWidth: 100}}
            numberOfLines={1}
            ellipsizeMode="tail">
            {city}, {stateCode}
          </Text>
          <Text
            style={{color: COLORS.white2, ...FONTS.h3, maxWidth: 100}}
            numberOfLines={1}
            ellipsizeMode="tail">
            {fullName}
          </Text>
        </Animated.View>

        <Ionicons
          name="chevron-back"
          size={35}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <VisitFavIcon park={parkCode} list="favorites" size={50} />
          <VisitFavIcon park={parkCode} list="visited" size={50} />
        </View>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  pageContain: {flex: 1, backgroundColor: COLORS.white},
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.transparentBlack5,
  },
  favoriteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
  },
  headerBarContain: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingBottom: 10,
  },
  animatedScreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.black,
  },
  animatedHeaderBarTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  parkCardHeader: {
    marginTop: -1000, // To make sure header image doesn't scroll
    paddingTop: 1000, // To make sure header image doesn't scroll
    alignItems: 'center',
    overflow: 'hidden',
  },
  animatedHeaderImg: {height: HEADER_HEIGHT, width: '200%'},
  animatedParkInfoCard: {
    position: 'absolute',
    bottom: 10,
    left: 30,
    right: 30,
    minHeight: 80,
  },
});

export default ParkScreen;
