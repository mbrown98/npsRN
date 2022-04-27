import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {useGlobal} from '../../../context/global-context';

const GuessParkBanner = () => {
  const navigation = useNavigation();
  const {connection} = useGlobal();

  if (
    !connection ||
    (connection.type !== 'wifi' && connection.type !== 'cellular')
  ) {
    return null;
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ParkGame')}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={{borderRadius: 10}}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}
        source={IMAGES.onboard.olympic}>
        <Text style={{fontWeight: '700', fontSize: 30, color: 'white'}}>
          Guess That Park
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GuessParkBanner;

const styles = StyleSheet.create({});
