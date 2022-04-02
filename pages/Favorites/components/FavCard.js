import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useParkByID from '../../../api/hooks/useParkByID';
import {FONTS} from '../../../constants';

const FavCard = ({parkId}) => {
  const navigation = useNavigation();
  console.log('FP', parkId);
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
    backgroundColor: 'white',
    borderRadius: 5,
  },
  bgImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImgStyle: {borderRadius: 5},
  favCardName: {
    color: 'white',
    textAlign: 'center',

    ...FONTS.body3,
    fontWeight: '600',
  },
});
