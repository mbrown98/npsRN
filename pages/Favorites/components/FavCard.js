import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '../../../constants';
import CacheImage from '../../../components/CacheImage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FavCard = ({data}) => {
  const navigation = useNavigation();

  if (!data) {
    return null;
  }
  const {
    parkCode,
    fullName,
    image: {url},
  } = data;

  return (
    <TouchableOpacity
      style={{...styles.contain}}
      onPress={() => navigation.navigate('Park', {code: parkCode})}>
      {/* Background Image */}
      <CacheImage uri={url} style={styles.bgImg}>
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
    height: windowHeight * 0.13,
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
