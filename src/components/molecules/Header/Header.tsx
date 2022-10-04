import React, { memo } from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import IconButton from '../../atoms/IconButton';
import Logo from '../../atoms/Logo';
import { HeaderProps } from './HeaderProps';
import {
  HeaderNavCategoryStyeld,
  HeaderNavMenuStyled,
  HeaderStyled,
} from './HeaderStyled';

function Header({ ...props }: HeaderProps) {
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

export default memo(Header);
