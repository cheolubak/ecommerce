import styled from '@emotion/styled';
import { mobileSize, tabletSize } from '../../util/Size';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  box-shadow: var(--SHADOW_DEFAULT);

  @media screen and (max-width: ${tabletSize}) {
    padding: 0 16px;
  }
`;

export const HeaderNavCategoryStyeld = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 36px;

  @media screen and (max-width: ${tabletSize}) {
    gap: 16px;
  }

  @media screen and (max-width: ${mobileSize}) {
    & button {
      display: none;
    }
  }
`;

export const HeaderNavMenuStyled = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 36px;

  @media screen and (max-width: ${tabletSize}) {
    gap: 16px;
  }
`;
