import React, { memo } from 'react';
import { ListTitleProps } from './ListTitleProps';
import { ListTitleStyled } from './ListTitleStyled';

function ListTitle({ ...props }: ListTitleProps) {
  return <ListTitleStyled>{props.children}</ListTitleStyled>;
}

export default memo(ListTitle);
