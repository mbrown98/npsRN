import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {UTILS} from '../utils';
import {COLORS} from '../constants';
import DIM from '../utils/viewport';

const ImgInfoBox = ({
  data: {infoUrl, img, title, subText, index, parkCode},
}) => {
  const bg = index % 2 ? 'white' : COLORS.transparentGreen;
  return (
    <TouchableOpacity
      onPress={() => UTILS.browser.openBrowser(infoUrl)}
      style={[styles.contain, {backgroundColor: bg}]}>
      <View style={{flex: 6, paddingRight: 10}}>
        {!!parkCode && (
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{fontWeight: '200', marginBottom: 5}}>
            {parkCode.toUpperCase()}
          </Text>
        )}
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{fontWeight: '800'}}>
          {title}
        </Text>
        {!!subText && (
          <Text numberOfLines={5} ellipsizeMode="tail" style={styles.subText}>
            {subText}
          </Text>
        )}
      </View>
      {!!img && (
        <View style={styles.imgWrapper}>
          <Image source={{uri: img}} style={styles.img} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ImgInfoBox;

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    minHeight: DIM.h * 0.1,
  },
  imgWrapper: {flex: 2, maxHeight: 60},
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  subText: {marginVertical: 5, fontWeight: '300', fontSize: 12},
});
