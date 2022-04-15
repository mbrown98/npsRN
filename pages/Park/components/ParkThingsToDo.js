import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ImgInfoBox from '../../../components/ImgInfoBox';

Entypo.loadFont();

const ParkThingsToDo = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item: thing, index}) => {
        const {
          url: infoUrl,
          title,
          images,
          activityDescription: subText,
        } = thing;
        return (
          <ImgInfoBox data={{infoUrl, img: images[0].url, title, index}} />
        );
      }}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ParkThingsToDo;

const styles = StyleSheet.create({});
