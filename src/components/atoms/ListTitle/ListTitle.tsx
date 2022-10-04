import React from 'react';
import { ListTitleProps } from './ListTitleProps';
import { ListTitleStyled } from './ListTitleStyled';

export default function ListTitle({ ...props }: ListTitleProps) {
  return <ListTitleStyled>{props.children}</ListTitleStyled>;
}
