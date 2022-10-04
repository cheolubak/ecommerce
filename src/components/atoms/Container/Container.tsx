import React, { HTMLAttributes, memo } from 'react';
import { ContainerStyled } from './ContainerStyled';

function Container({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <ContainerStyled>{props.children}</ContainerStyled>;
}

export default memo(Container);
