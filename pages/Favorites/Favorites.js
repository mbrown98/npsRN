import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import FavCard from './components/FavCard';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Favorites() {
  // sort parks alphabetically and then create three flatlists
  return (
    <SafeAreaView style={styles.contain}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'row',
  },
  flatlistContent: {
    flexGrow: 1,
  },
  favCardWrapper: {
    flex: 0.5,
    margin: 5,
    height: 120,
  },
});
