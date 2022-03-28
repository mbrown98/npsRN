import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
  StyleSheet,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {SIZES, FONTS, icons, COLORS} from '../../../constants';
import {IMAGES} from '../../../assets/images';
import {usePark} from '../park-context';

const ParkHeadInfo = () => {
  const {data} = usePark();

  const {images, fullName, name, addresses, description} = data;
  const {city, stateCode} = addresses[0];
  return (
    <BlurView style={styles.blurViewContain} blurType="dark">
      <View style={styles.blurFlexRow}>
        <View style={styles.imgContain}>
          <Image source={{uri: images[1].url}} style={styles.circleImg} />
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.parkSubText}>
            {city}, {stateCode}
          </Text>
          <Text style={styles.parkNameText}>{fullName}</Text>
        </View>
      </View>
    </BlurView>
  );
};

export default ParkHeadInfo;

const styles = StyleSheet.create({
  blurViewContain: {
    flex: 1,
    borderRadius: SIZES.radius,
  },
  blurFlexRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgContain: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
  circleImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textWrapper: {flex: 1, marginHorizontal: 20},
  parkSubText: {color: COLORS.lightGray2, ...FONTS.body4},
  parkNameText: {color: COLORS.white2, ...FONTS.h3},
});
