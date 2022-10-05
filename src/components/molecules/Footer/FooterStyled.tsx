import styled from '@emotion/styled';
import { CAPTION, OVERLINE } from '../../subatomic/Typography';

export const FooterStyled = styled.footer`
  padding: 48px 24px;
  background-color: var(--COLOR_PRIMARY);
  color: var(--COLOR_WHITE);
`;

export const FooterLogoStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin: 0 0 24px;
`;

export const FooterContactMeStyled = styled.span`
  ${CAPTION};
  display: block;
  color: inherit;
  margin: 0 0 8px;
`;

export const FooterMailLinkStyled = styled.a`
  color: inherit;
  margin: 0 0 24px;
  text-decoration: underline;
  display: block;

  &:hover {
    color: var(--COLOR_SECONDARY);
  }
`;

export const FooterCopyrightStyled = styled.div`
  ${OVERLINE};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: inherit;
`;
