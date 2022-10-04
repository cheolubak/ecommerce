import React, { memo } from 'react';
import { IconButtonProps } from './IconButtonProps';
import { IconButtonStyled } from './IconButtonStyled';

function IconButton({ color, ...props }: IconButtonProps) {
  return <IconButtonStyled color={color}>{props.children}</IconButtonStyled>;
}

export default memo(IconButton);
