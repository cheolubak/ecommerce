import React from 'react';
import { ButtonProps } from './ButtonProps';
import { ButtonStyled } from './ButtonStyled';

export default function Button({
  color = 'primary',
  size = 'large',
  shape = 'fill',
  ...props
}: ButtonProps) {
  return (
    <ButtonStyled
      color={color}
      size={size}
      shape={shape}
      {...props}
    >
      {props.children}
    </ButtonStyled>
  );
}
