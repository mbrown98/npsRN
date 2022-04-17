import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import AUTH from '../../../api/firebase/auth';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {useAuth} from '../../../context/auth-context';

const HomeHeader = () => {
  const {user} = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <View style={styles.contain}>
      {!profileOpen ? (
        <View style={styles.userInfoWrapper}>
          <Text style={styles.userName}>Hello {user.displayName},</Text>
          <Text style={styles.subText}>What do you want to explore today?</Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity style={styles.toBox} onPress={() => AUTH.signOut()}>
            <Text style={styles.toText}>Sign-Out</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.toBox}>
            <Text style={styles.toText}>Delete Account</Text>
          </TouchableOpacity> */}
        </View>
      )}
      <TouchableOpacity onPress={() => setProfileOpen(!profileOpen)}>
        <Image source={{uri: user.photoURL}} style={styles.userProfileImg} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
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
  toBox: {borderWidth: 1, padding: 10, borderRadius: 5},
  toText: {
    fontWeight: '800',
  },
});
