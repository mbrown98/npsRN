import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ImgInfoBox from '../../../components/ImgInfoBox';

const ImgInfoBoxFlatList = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item: optData, index}) => {
        return <ImgInfoBox data={{...optData, index}} />;
      }}
      keyExtractor={item => item.title}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ImgInfoBoxFlatList;

const styles = StyleSheet.create({});
