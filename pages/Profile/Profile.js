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
import {COLORS, FONTS, SIZES} from '../../constants';
import parkCodes from '../../assets/data/parkCodes';

export default function Profile() {
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
          {title: 'Visited', stats: {count: 45, total: parkCodes.length}},
          {
            title: 'Favorited',
            stats: {count: 40, total: parkCodes.length},
          },
          {
            title: 'Unopened',
            stats: {count: 257, total: parkCodes.length},
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

            <Text style={styles.statSectionStat}>
              {opt.stats.count}/{opt.stats.total}
            </Text>
          </View>
        ))}
      </View>
      <MapView initialRegion={mapCoords} style={styles.map} />
      <Button
        title="Sign-Out"
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        }
      />
      <Button title="Delete Account" onPress={() => {}} />
      {/* <Button
        title="Google Sign-Out"
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        }
      />
      <Button title="Get Favs" onPress={() => getFavoriteParks()} />
      <Button title="Get All Parks" onPress={() => getAllParks()} />
      <Button
        title="Download All"
        onPress={() => downloadAllParkDataToStore()}
      />
      <Text>{JSON.stringify(user.uid)}</Text> */}
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
  },
  map: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
