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
import {DEV_favorites, DEV_visited} from '../../constants/devConstants';
import FavCard from './components/FavCard';
import {useAuth} from '../../context/auth-context';
import {FIRESTORE} from '../../api/firebase/firestore';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Favorites() {
  const {user} = useAuth();
  const [activeList, setActiveList] = useState('favorites');

  const displayList = useCallback(() => {
    console.log('running');
    let arr = activeList === 'favorites' ? DEV_favorites : DEV_visited;
    let targetArr = 0;
    const threeArr = [[], [], []];
    arr
      .sort((a, b) => a.id.localeCompare(b.id))
      .forEach(park => {
        threeArr[targetArr].push(park);
        targetArr += 1;
        if (targetArr === 3) {
          targetArr = 0;
        }
      });

    return threeArr;
  }, [activeList]);

  return (
    <SafeAreaView style={styles.contain}>
      <Button
        title="DEV"
        onPress={async () => {
          FIRESTORE.updateUserFavorites(user.uid, ['yell', 'acad']);
        }}
      />
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
      <View style={styles.listContain}>
        {displayList().map((subArr, i) => (
          <FlatList
            contentContainerStyle={styles.flatlistContent}
            data={subArr}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View
                style={[
                  styles.favCardWrapper,
                  {height: randomIntFromInterval(100, 300)},
                ]}>
                <FavCard parkId={item.id} />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        ))}
      </View>
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
