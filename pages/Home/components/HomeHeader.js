import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {useAuth} from '../../../context/auth-context';

const HomeHeader = () => {
  const {user} = useAuth();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: SIZES.padding,
        alignItems: 'center',
        height: 80,
      }}>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: COLORS.darkGreen,
            ...FONTS.h2,
          }}>
          Hello {user.displayName},
        </Text>
        <Text
          style={{
            marginTop: 3,
            color: COLORS.gray,
            ...FONTS.body3,
          }}>
          What do you want to explore today?
        </Text>
      </View>
      <TouchableOpacity onPress={() => console.log('Profile')}>
        <Image
          source={{uri: user.photoURL}}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
