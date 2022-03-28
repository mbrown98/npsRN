import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

export default function Favorites() {
  return (
    <SafeAreaView style={styles.contain}>
      <FlatList
        contentContainerStyle={styles.flatlistContent}
        data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.favCardWrapper}>
            <Text>{item.id}</Text>
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
    backgroundColor: '#ddd',
    height: 150,
  },
});
