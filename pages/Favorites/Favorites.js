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

export default function Favorites() {
  return (
    <SafeAreaView style={styles.contain}>
      <FlatList
        contentContainerStyle={styles.flatlistContent}
        data={[{id: 'yell'}, {id: 'acad'}, {id: 'deso'}, {id: 'deva'}]}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.favCardWrapper}>
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
