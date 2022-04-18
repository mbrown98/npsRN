import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useParkByID from '../../../api/hooks/useParkByID';
import {COLORS, FONTS} from '../../../constants';

const FavCard = ({parkId}) => {
  const navigation = useNavigation();

  const {data, isLoading, isSuccess} = useParkByID(parkId);

  if (!data) {
    return null;
  }
  const {images, fullName} = data;

  return (
    <TouchableOpacity
      style={{...styles.contain}}
      onPress={() => navigation.navigate('Park', {code: parkId})}>
      {/* Background Image */}
      <ImageBackground
        source={{uri: images[0].url}}
        imageS
        resizeMode="cover"
        style={styles.bgImg}
        imageStyle={styles.bgImgStyle}>
        <Text style={styles.favCardName}>{fullName}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FavCard;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    height: 90,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImgStyle: {
    borderRadius: 5,
    opacity: 0.9,
    backgroundColor: COLORS.transparentGreen,
  },
  favCardName: {
    color: 'white',
    textAlign: 'center',

    ...FONTS.body3,
    fontWeight: '800',
  },
});
