import styled from '@emotion/styled';
import { HEADLINE } from '../../subatomic/Typography';
import { tabletSize } from '../../util/Size';

export const MainBannerStyled = styled.section`
  height: 604px;
  background: linear-gradient(90deg, #9ef9d8 0%, #caf6bf 100%);

  @media screen and (max-width: ${tabletSize}) {
    height: 314px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MainBannerContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 24px;

  @media screen and (max-width: ${tabletSize}) {
    justify-content: center;
    height: 100%;
    padding: 0;
  }
`;

export const MainBannerSloganWrapStyled = styled.div``;

export const MainBannerSloganStyled = styled.h1`
  ${HEADLINE(1)};
  margin: 0 0 10px;
  color: var(--COLOR_PRIMARY);

  @media screen and (max-width: ${tabletSize}) {
    ${HEADLINE(2)};
    text-align: center;
  }
`;

export const MainBannerSubSloganStyled = styled.h2`
  ${HEADLINE(4)};
  margin: 0 0 10px;
  color: var(--COLOR_PRIMARY);

  @media screen and (max-width: ${tabletSize}) {
    ${HEADLINE(6)};
    text-align: center;
  }
`;

export const MainBannerImageStyled = styled.picture`
  width: 286px;
  height: 604px;

  @media screen and (max-width: ${tabletSize}) {
    display: none;
  }
`;
