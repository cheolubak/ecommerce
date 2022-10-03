import React from 'react';
import { IconButtonProps } from './IconButtonProps';
import { IconButtonStyled } from './IconButtonStyled';

export default function IconButton({ color, ...props }: IconButtonProps) {
  return <IconButtonStyled color={color}>{props.children}</IconButtonStyled>;
}
