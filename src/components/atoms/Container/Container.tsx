import React, { HTMLAttributes } from 'react';
import { ContainerStyled } from './ContainerStyled';

export default function Container({
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <ContainerStyled>{props.children}</ContainerStyled>;
}
