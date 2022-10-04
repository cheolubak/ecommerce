import styled from '@emotion/styled';
import { HEADLINE } from '../../subatomic/Typography';

export const MainBannerStyled = styled.section`
  height: 604px;
  background: linear-gradient(90deg, #9ef9d8 0%, #caf6bf 100%);
`;

export const MainBannerContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 24px;
`;

export const MainBannerSloganWrapStyled = styled.div``;

export const MainBannerSloganStyled = styled.h1`
  ${HEADLINE(1)};
  margin: 0 0 10px;
  color: var(--COLOR_PRIMARY);
`;

export const MainBannerSubSloganStyled = styled.h2`
  ${HEADLINE(4)};
  margin: 0 0 10px;
  color: var(--COLOR_PRIMARY);
`;

export const MainBannerImageStyled = styled.picture`
  width: 286px;
  height: 604px;
`;
