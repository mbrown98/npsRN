import React, {useState} from 'react';
import {useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import {COLORS, FONTS, parkCodes, SIZES} from '../../constants';
import FavCard from './components/FavCard';
import {useFirebase} from '../../context/firebase-content';
import ParksSearchBar from '../Home/components/ParksSearchBar';
import CacheImage from '../../components/CacheImage';

export default function Favorites() {
  const {
    userData: {favorites, visited},
  } = useFirebase();

  const [activeList, setActiveList] = useState('favorites');
  const [term, setTerm] = useState('');

  return (
    <SafeAreaView style={styles.contain}>
      <View style={styles.listToggle}>
        {['favorites', 'visited'].map((opt, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => setActiveList(opt)}>
              <Text
                style={[
                  {...FONTS.h4},
                  activeList === opt && {color: COLORS.darkGreen},
                ]}>
                {opt.toLocaleUpperCase()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{padding: 10}}>
        <ParksSearchBar
          showDropdown={false}
          onChange={v => setTerm(v.toLowerCase())}
        />
      </View>
      {activeList === 'favorites' && <CacheImage />}
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.flatlistContent}
        style={{paddingHorizontal: 5}}
        data={Object.keys(activeList === 'favorites' ? favorites : visited)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          const data = parkCodes[item];
          if (!data?.fullName.toLowerCase().startsWith(term)) {
            return null;
          }
          return <FavCard data={data} key={data.parkCode} />;
        }}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  listToggle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  listContain: {flex: 1, flexDirection: 'row'},
  flatlistContent: {
    flexGrow: 1,
  },
  favCardWrapper: {
    flex: 0.5,
    margin: 5,
    height: 120,
  },
});
