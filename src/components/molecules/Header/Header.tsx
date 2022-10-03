import React from 'react';
import Button from '../../atom/Button';
import Icon from '../../atom/Icon';
import IconButton from '../../atom/IconButton';
import Logo from '../../atom/Logo';
import { HeaderProps } from './HeaderProps';
import {
  HeaderNavCategoryStyeld,
  HeaderNavMenuStyled,
  HeaderStyled,
} from './HeaderStyled';

export default function Header({ ...props }: HeaderProps) {
  return (
    <HeaderStyled>
      <HeaderNavCategoryStyeld>
        <Logo />
        <Button
          color='secondary'
          shape='text'
        >
          Home
        </Button>
        <Button
          color='primary'
          shape='text'
        >
          Products
        </Button>
      </HeaderNavCategoryStyeld>
      <HeaderNavMenuStyled>
        <IconButton>
          <Icon icon='search' />
        </IconButton>
        <IconButton>
          <Icon icon='person' />
        </IconButton>
        <IconButton>
          <Icon icon='basket' />
        </IconButton>
      </HeaderNavMenuStyled>
    </HeaderStyled>
  );
}
