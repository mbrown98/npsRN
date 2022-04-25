import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGES} from '../../../assets/images';
import {COLORS, SIZES, FONTS} from '../../../constants';

const {olympic} = IMAGES.onboard;

export default function LoginHeader() {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" source={olympic} style={styles.imgBg}>
        <LinearGradient
          style={styles.linearG}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={[COLORS.transparent, COLORS.black]}>
          <Text style={styles.titleText}>Explore All the Parks</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    height: SIZES.height > 700 ? '65%' : '60%',
  },
  imgBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  linearG: {
    height: 200,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding,
  },
  titleText: {
    width: '80%',
    color: COLORS.white,
    lineHeight: 45,
    ...FONTS.largeTitle,
  },
});
