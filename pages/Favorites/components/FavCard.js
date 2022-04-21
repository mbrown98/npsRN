import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useParkByID from '../../../api/hooks/useParkByID';
import {COLORS, FONTS, SIZES} from '../../../constants';
import CacheImage from '../../../components/CacheImage';

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
      <CacheImage uri={images[0].url} style={styles.bgImg}>
        <View style={styles.imgOpacity}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.favCardName}>
            {fullName}
          </Text>
        </View>
      </CacheImage>
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
  },
  imgOpacity: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "'rgba(231, 249, 239,.15)'",
    padding: 5,
    borderRadius: 10,
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
