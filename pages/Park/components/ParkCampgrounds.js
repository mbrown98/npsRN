import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import BROWSER from '../../../utils/browser';
import ImgInfoBox from '../../../components/ImgInfoBox';

const ParkCampgrounds = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item: camp, index}) => {
        const {url: infoUrl, name: title, description: subText, images} = camp;

        return (
          <ImgInfoBox
            data={{infoUrl, img: images[0].url, title, subText, index}}
          />
        );
      }}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ParkCampgrounds;

const styles = StyleSheet.create({});
