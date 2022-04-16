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
import {COLORS, FONTS, SIZES} from '../../constants';
import FavCard from './components/FavCard';
import {useFirebase} from '../../context/firebase-content';
import ParksSearchBar from '../Home/components/ParksSearchBar';

export default function Favorites() {
  const {
    userData: {favorites, visited},
  } = useFirebase();

  const [activeList, setActiveList] = useState('favorites');

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
      <View style={{paddingBottom: 10}}>
        <ParksSearchBar />
      </View>

      <FlatList
        numColumns={2}
        contentContainerStyle={styles.flatlistContent}
        style={{paddingHorizontal: 5}}
        data={Object.keys(activeList === 'favorites' ? favorites : visited)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <FavCard parkId={item} />}
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
