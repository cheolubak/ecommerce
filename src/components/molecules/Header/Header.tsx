import React, { memo } from 'react';
import Icon from '../../atoms/Icon';
import IconButton from '../../atoms/IconButton';
import Logo from '../../atoms/Logo';
import { HeaderProps } from './HeaderProps';
import {
  HeaderNavMenuStyled,
  HeaderStyled,
} from './HeaderStyled';

function Header({ ...props }: HeaderProps) {
  return (
    <HeaderStyled>
      <Logo />
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
