import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  StyleSheet,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import auth from '@react-native-firebase/auth';
import {useAuth} from '../../context/auth-context';
import {getFavoriteParks} from '../../api/firebase/parks';
import {ASYNC_STORE} from '../../offline/storage';
import {getAllParks} from '../../api/requests/getAllParks';
import {downloadAllParkDataToStore} from '../../offline/downloadAllParkDataToStore';
import {COLORS, FONTS, parkCodes, SIZES} from '../../constants';
import CustomButton from '../../components/CustomButton';

export default function Profile({navigation}) {
  const {user} = useAuth();
  console.log(user);

  const mapCoords = {
    latitude: '38.88927229',
    longitude: '-77.05017778',
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

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
            stats: {count: 12},
          },
          {
            title: 'Favorited',
            stats: {count: 56},
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
              ({Math.round((opt.stats.count / parkCodes.length) * 100)}%)
            </Text>
          </View>
        ))}
      </View>
      <MapView
        initialRegion={mapCoords}
        style={styles.map}
        onPress={() => navigation.navigate('FullMap')}
      />
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
        <Button title="Delete Account" onPress={() => {}} />
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
