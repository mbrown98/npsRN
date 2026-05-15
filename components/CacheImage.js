import FastImage from 'react-native-fast-image';
import React from 'react';

const CacheImage = ({uri = '', ...props}) => {
  return (
    <FastImage
      source={{
        uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
      {...props}
    />
  );
};

export default CacheImage;
