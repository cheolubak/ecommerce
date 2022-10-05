import React, { memo } from 'react';
import Icon from '../../atoms/Icon';
import Logo from '../../atoms/Logo';
import {
  FooterContactMeStyled,
  FooterCopyrightStyled,
  FooterLogoStyled,
  FooterMailLinkStyled,
  FooterStyled,
} from './FooterStyled';

function Footer() {
  return (
    <FooterStyled>
      <FooterLogoStyled>
        <Logo color='#FFF' />
        Cheolu Bak Portfolio
      </FooterLogoStyled>

      <FooterContactMeStyled>Contact Me.</FooterContactMeStyled>
      <FooterMailLinkStyled href='mailTo:dev.cheolubak@gmail.com'>
        dev.cheolubak@gmail.com
      </FooterMailLinkStyled>
      <FooterCopyrightStyled>
        <Icon icon='copyright' color='white' len={16} />
        2022. Cheolu Bak
      </FooterCopyrightStyled>
    </FooterStyled>
  );
}

export default memo(Footer);
