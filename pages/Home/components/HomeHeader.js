import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {useAuth} from '../../../context/auth-context';

const HomeHeader = () => {
  const {user} = useAuth();
  const navigation = useNavigation();
  return (
    <View style={styles.contain}>
      <View style={styles.userInfoWrapper}>
        <Text style={styles.userName}>Hello {user.displayName},</Text>
        <Text style={styles.subText}>What do you want to explore today?</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={{uri: user.photoURL}} style={styles.userProfileImg} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
    alignItems: 'center',
    height: 80,
  },
  userInfoWrapper: {flex: 1},
  userName: {color: COLORS.darkGreen, ...FONTS.h2},
  subText: {
    marginTop: 3,
    color: COLORS.gray,
    ...FONTS.body3,
  },
  userProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
