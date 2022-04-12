import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const ThingToDo = ({
  navigation,
  route: {
    params: {TTD},
  },
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text>{JSON.stringify(TTD)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThingToDo;

const styles = StyleSheet.create({});
