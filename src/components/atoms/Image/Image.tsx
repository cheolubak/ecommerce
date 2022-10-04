import React, { memo } from 'react';
import { ImageProps } from './ImageProps';
import { ImageStyled } from './ImageStyled';

function Image({ width, height, objectFit, ...props }: ImageProps) {
  return (
    <ImageStyled
      {...props}
      width={width}
      height={height}
      objectFit={objectFit}
      loading='lazy'
      decoding='async'
    />
  );
}

export default memo(Image);
