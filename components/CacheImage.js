import FastImage from 'react-native-fast-image';
import React from 'react';

const CacheImage = ({uri = '', ...props}) => {
  return (
    <FastImage
      {...props}
      source={{
        uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default CacheImage;
