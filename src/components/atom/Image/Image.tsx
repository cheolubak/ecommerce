import React from 'react';
import { ImageProps } from './ImageProps';
import { ImageStyled } from './ImageStyled';

export default function Image({
  width,
  height,
  objectFit,
  ...props
}: ImageProps) {
  return (
    <ImageStyled
      width={width}
      height={height}
      objectFit={objectFit}
      {...props}
      loading='lazy'
      decoding='async'
    />
  );
}
