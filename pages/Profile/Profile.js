import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useAuth} from '../../context/auth-context';
import {COLORS, FONTS, parkCodes, SIZES} from '../../constants';
import {DEV_filterParkKeys} from '../../utils/data/DEV_filterParkKeys';
import {useFirebase} from '../../context/firebase-content';

export default function Profile({navigation}) {
  const {user} = useAuth();
  const {
    userData: {favorites, visited},
  } = useFirebase();
  console.log(user);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={{uri: user.photoURL}}
        style={styles.profileImage}
        resizeMode="cover"
      />
      <Text style={styles.userName}>{user.displayName}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {[
          {
            title: 'Visited',
            stats: {count: Object.keys(visited).length},
          },
          {
            title: 'Favorited',
            stats: {count: Object.keys(favorites).length},
          },
          {
            title: 'Unopened',
            stats: {count: 256},
          },
        ].map((opt, i) => (
          <View style={styles.statSection} key={i}>
            <View
              style={{
                borderBottomColor: COLORS.gray,
                borderBottomWidth: 1,
                marginBottom: 5,
              }}>
              <Text style={styles.statSectionHeadText}>{opt.title}</Text>
            </View>

            <Text style={styles.statSectionStat}>{opt.stats.count}</Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: COLORS.gray,
                marginTop: 5,
              }}>
              (
              {Math.round(
                (opt.stats.count / Object.keys(parkCodes).length) * 100,
              )}
              %)
            </Text>
          </View>
        ))}
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-around',
        }}>
        <Button
          title="Sign-Out"
          onPress={() =>
            auth()
              .signOut()
              .then(() => console.log('User signed out!'))
          }
        />
        <Button
          title="DEV"
          onPress={() => {
            DEV_filterParkKeys();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: SIZES.padding,
  },
  userName: {
    ...FONTS.h1,
    alignSelf: 'center',
    marginHorizontal: SIZES.padding,
    color: COLORS.darkGreen,
  },
  statSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  statSectionHeadText: {
    fontSize: 15,
    fontWeight: '300',
    color: COLORS.gray,
    paddingVertical: 5,
  },
  statSectionStat: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.darkGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
