import styled from '@emotion/styled';
import { ImageProps } from './ImageProps';

export const ImageStyled = styled.img<{
  width?: ImageProps['width'];
  height?: ImageProps['height'];
  objectFit?: ImageProps['objectFit'];
}>`
  border-radius: 8px;

  width: ${({ width }) => {
    if (typeof width === 'number') {
      return `${width}px`;
    } else if (!!width) {
      return width;
    } else {
      return 'auto';
    }
  }};

  height: ${({ height }) => {
    if (typeof height === 'number') {
      return `${height}px`;
    } else if (!!height) {
      return height;
    } else {
      return 'auto';
    }
  }};

  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  object-position: 50% 50%;
`;
