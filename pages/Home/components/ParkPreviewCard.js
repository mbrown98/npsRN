import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import useParkByID from '../../../api/hooks/useParkByID';
import colors from '../../../assets/colors/colors';

Entypo.loadFont();

export default function ParkPreviewCard({item}) {
  const navigation = useNavigation();
  const {
    index,
    item: {code},
  } = item;

  const {data, isLoading, isSuccess} = useParkByID(code);

  if (!data) {
    return null;
  }
  const {images, fullName, name, addresses} = data;

  const {city, stateCode} = addresses[0];

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Park', {code})}>
      <ImageBackground
        source={{uri: images[0].url}}
        style={[styles.discoverItem, {marginLeft: !index ? 20 : 0}]}
        imageStyle={styles.discoverItemImage}>
        <Text style={styles.discoverItemTitle}>{name}</Text>
        <View style={styles.discoverItemLocationWrapper}>
          <Entypo name="location-pin" size={18} color={colors.white} />
          <Text style={styles.discoverItemLocationText}>
            {city}, {stateCode}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.white,
  },
});
