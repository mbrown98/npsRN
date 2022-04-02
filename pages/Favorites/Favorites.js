import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';
import FavCard from './components/FavCard';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Favorites() {
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
      <View style={styles.listContain}>
        <FlatList
          contentContainerStyle={styles.flatlistContent}
          data={[
            {id: 'yell'},
            {id: 'acad'},
            {id: 'appa'},
            {id: 'anti'},
            {id: 'beol'},
            {id: 'bawa'},
          ]}
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
        <FlatList
          contentContainerStyle={styles.flatlistContent}
          data={[
            {id: 'deso'},
            {id: 'deva'},
            {id: 'bith'},
            {id: 'bibe'},
            {id: 'cebr'},
            {id: 'crla'},
          ]}
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
        <FlatList
          contentContainerStyle={styles.flatlistContent}
          data={[
            {id: 'frri'},
            {id: 'gwca'},
            {id: 'glca'},
            {id: 'jame'},
            {id: 'hocu'},
            {id: 'lewi'},
          ]}
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
